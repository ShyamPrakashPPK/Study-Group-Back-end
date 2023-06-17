export default function findById(id:any, questionRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return questionRepository.findById(id).then((question:any) => {
        try {
            if (!question) {
                const error = new Error('No question found');
                throw error;
            }

            return question;
        } catch (error) {
            console.log(error);
        }
    })
}