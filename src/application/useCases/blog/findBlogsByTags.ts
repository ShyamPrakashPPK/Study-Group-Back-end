export default async function findBlogByTag(tags:any, id:any, blogRepository:any) {
    try {
        if (!id) {
            const error = new Error('id is required');
            throw error;
        }

        if (!tags) {
            const error = new Error('tags is required');
            throw error;
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const blogs = await blogRepository.findBlogByTag(tags, id)
        if (blogs.length === 0) {
            const error = new Error('No blog found');
            throw error;
        }

        return blogs;

    } catch (error:any) {
        if (error.statusCode === 401) {
            const blogs = await blogRepository.findLatest(id)
            if (!blogs) {
                const error = new Error('No blogs found');
                throw error;
            }

            return blogs;
        }
    }
}