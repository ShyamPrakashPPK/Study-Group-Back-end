export default function likeBlogById(blogId:any, userId:any, blogRepository:any) {
    if (!blogId) {
        const error = new Error('blog id is required');
        throw error;
    }

    if (!userId) {
        const error = new Error('user id is required');
        throw error;
    }

    return blogRepository.likeBlogById(blogId, userId).then((res:any) => {
        try {
            return res;
        } catch (error) {
            console.log(error);
        }
    })
}