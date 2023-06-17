import blogController from "../../../adapters/controllers/blogController";
import blogDbRepository from "../../../application/repositories/blogDbRepository";
import blogDbRepositoryMongoDB from "../../../application/repositories/blogDbRepository"
import tagsDbRepository from "../../../application/repositories/tagsDbRepository"
import tagsDbRepositoryMongoDB from "../../database/mongoDb/repositories/tagsRepositoryMongoDb";
import {userDbRepository} from "../../../application/repositories/userDbRepository ";
import {userRepositoryMongoDB} from "../../database/mongoDb/repositories/userRepositoryMongoDb";

export default function blogRouter(express:any) {
    const router = express.Router();

    const controller = blogController(
        blogDbRepository,
        blogDbRepositoryMongoDB,
        tagsDbRepository,
        tagsDbRepositoryMongoDB,
        userDbRepository,
        userRepositoryMongoDB
    );

    router.route('/').get(controller.getAllBlogs);
    router.route('/add').post(controller.addBlog);
    router.route('/blog/:id').get(controller.getBlog);
    router.route('/latest').get(controller.getLatestBlog)
    router.route('/tags').get(controller.getBlogByTag);
    router.route('/like/:blogId').get(controller.likeBlog);
    router.route('/save/:blogId').get(controller.saveBlog);
    router.route('/userBlogs/:user').get( controller.getUserBlogs);
    // router.route('/noanswers').get(authMiddleware, controller.getBlogsWithNoAnswers);

    return router;
}