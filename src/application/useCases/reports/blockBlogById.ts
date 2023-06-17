export default function blockBlogById(blogId:any, blogRepository:any) {

    if (!blogId) {
        const error = new Error('blogId is required');
        throw error;
    }

    return blogRepository.blockBlogById(blogId).then((res:any) => {
        if (res.status)
            return { status: false };
        else
            return { status: true };
    })
}