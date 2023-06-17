export default function fetchBlogReportsById(blogId:any, dbRepository:any) {

    if (!blogId) {
        const error = new Error('blogId is required');
        throw error;
    }

    return dbRepository.fetchBlogReportsById(blogId);
}