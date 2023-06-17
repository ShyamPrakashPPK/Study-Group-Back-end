import findAll from "../../application/useCases/blog/findAllBlogs";
import createBlog from "../../application/useCases/blog/createBlog";
import findById from "../../application/useCases/blog/findById";
import findLatest from "../../application/useCases/blog/findLatest";
import findBlogByTag from "../../application/useCases/blog/findBlogsByTags";
import likeBlogById from "../../application/useCases/blog/likeBlog";
import saveBlogById from "../../application/useCases/blog/saveBlog";
import count from "../../application/useCases/blog/countBlog";
import fetchUserBlogs from "../../application/useCases/blog/fetchUserBlogs";
import  {findByEmail}  from "../../application/useCases/user/findByEmail";
import { UserDbInterface } from "../../application/repositories/userDbRepository ";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/userRepositoryMongoDb";

export default function blogController(
    blogDbRepository:any,
    blogDbRepositoryImpl:any,
    tagsDbRepository:any,
    tagsDbRepositoryImpl:any,
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB
) {
    const dbRepository = blogDbRepository(blogDbRepositoryImpl());
    const tagsRepository = tagsDbRepository(tagsDbRepositoryImpl());
    const userRepository = userDbRepository(userDbRepositoryImpl());
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());

    const getAllBlogs = async (req:any, res:any) => {
        const id = req.decodeToken.user.id;
        const page = parseInt(req.query.skip) + 1
        const pageSize = +req.query.limit || 10
        const skip = (page - 1) * pageSize
        const filter = req.query.filter;
        const sort = req.query.sort;
        const totalPosts = await count(id, dbRepository)

        findAll(id, pageSize, skip, filter, sort, dbRepository)
            .then((blogs:any) => res.json({ blogs, totalPosts }))
            .catch((err:any) => console.log(err))
    }

    const addBlog = async (req: any, res: any, next: any) => {
        const user = req.body.user
        const userDetails = await findByEmail(user, dbRepositoryUser)
        
        const id = userDetails._id.toString();       
        const { title, details } = req.body.blog;
        const date = new Date();
        const tags = req.body.tags;        
        createBlog({
            id,
            title,
            details,
            date,
            tags,
            dbRepository,
            tagsRepository
        })
            .then(() => res.json({ success: true }))
            .catch((err:any) => console.log(err))
    }

    const getBlog = (req:any, res:any, next:any) => {
        const id = req.params.id;

        findById(id, dbRepository)
            .then((blog:any) => res.json(blog))
            .catch((err:any) => console.log(err))
    }

    const getLatestBlog = (req:any, res:any) => {
        const id = req.decodeToken.user.id
        findLatest(id, dbRepository)
            .then((blogs:any) => res.json(blogs))
            .catch((err:any) => console.log(err))
    }

    const getBlogByTag = (req:any, res:any) => {
        const tags = req.query.tags.split(',');
        const id = req.decodeToken.user.id;

        findBlogByTag(tags, id, dbRepository)
            .then((blogs) => res.json(blogs))
            .catch(err => console.log(err))
    }

    const likeBlog = (req:any, res:any) => {
        const blogId = req.params.blogId;
        const userId = req.decodeToken.user.id;

        likeBlogById(blogId, userId, dbRepository)
            .then(() => res.json())
            .catch((err:any) => console.log(err))
    }

    const saveBlog = (req:any, res:any) => {
        const blogId = req.params.blogId;
        const userId = req.decodeToken.user.id;

        saveBlogById(blogId, userId, dbRepository, userRepository)
            .then(() => res.json())
            .catch(err => console.log(err))
    }

    const getUserBlogs = (req:any, res:any) => {
        const userId = req.params.user;

        fetchUserBlogs(userId, dbRepository)
            .then((blogs:any) => res.json(blogs))
            .catch((err:any) => console.log(err))
    }

    return {
        getAllBlogs,
        getBlog,
        addBlog,
        getLatestBlog,
        getBlogByTag,
        likeBlog,
        saveBlog,
        getUserBlogs
    }
}