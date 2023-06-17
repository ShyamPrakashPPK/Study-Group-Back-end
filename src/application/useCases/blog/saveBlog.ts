export default async function saveBlog(blogId:any, userId:any, blogRepository:any, userRepository:any) {
    const blog = blogRepository.saveBlog(blogId, userId);
    const user = userRepository.saveBlog(blogId, userId);

    return Promise.all([blog, user])
}