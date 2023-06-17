export default function findAll(id:any, pageSize:any, skip:any, filter:any, sort:any, blogRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return blogRepository.findAll(id, pageSize, skip, filter, sort).then((blogs: { details: any[]; }[]) => {
        try {
            if (!blogs) {
                const error = new Error('No blogs found');
                throw error;
            }

            blogs.forEach((blog: { details: any[]; }) => {
                blog.details = blog.details.slice(0, 200);
            });

            return blogs;
        } catch (error) {
            console.log(error);
        }
    })
}