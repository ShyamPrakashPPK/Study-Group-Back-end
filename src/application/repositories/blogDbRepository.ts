export default function blogRepository(repository:any) {
    const findAll = (id:any, pageSize:any, skip:any, filter:any, sort:any) => repository.findAll(id, pageSize, skip, filter, sort);
    const create = (blog:any) => repository.create(blog);
    const findById = (id:any) => repository.findById(id);
    const findLatest = (id:any) => repository.findLatest(id);
    const findBlogByTag = (tags:any, id:any) => repository.findBlogByTag(tags, id);
    const likeBlogById = (blogId:any, userId:any) => repository.likeBlogById(blogId, userId);
    const saveBlog = (blogId:any, userId:any) => repository.saveBlog(blogId, userId);
    const count = (id:any) => repository.count(id);
    const fetchUserBlogs = (id:any) => repository.fetchUserBlogs(id);
    const changeReportCount = (blogId:any, value:any) => repository.changeReportCount(blogId, value);
    const blockBlogById = (blogId:any) => repository.blockBlogById(blogId);

    return {
        findAll,
        findById,
        create,
        findLatest,
        findBlogByTag,
        likeBlogById,
        saveBlog,
        count,
        fetchUserBlogs,
        changeReportCount,
        blockBlogById
    }
}