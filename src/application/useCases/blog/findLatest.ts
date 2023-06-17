export default function findLatest(id:any, blogRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return blogRepository.findLatest(id).then((blogs:any) => {
        try {
            if (!blogs) {
                const error = new Error('No blogs found');
                throw error;
            }

            return blogs;
        } catch (error) {
            console.log(error);
        }
    })
}