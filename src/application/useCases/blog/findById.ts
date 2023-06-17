export default function findById(id:any, blogRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }
    return blogRepository.findById(id).then((blog: any) => {
        try {
            if (!blog) {
                const error = new Error('No blog found');
                throw error;
            }

            return blog;
        } catch (error) {
            console.log(error);
        }
    })
}