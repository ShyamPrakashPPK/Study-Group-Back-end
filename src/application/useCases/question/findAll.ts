export default function findAll(id:any, pageSize:any, skip:any, filter:any, sort:any, questionRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return questionRepository.findAll(id, pageSize, skip, filter, sort).then((questions:any) => {
        try {
            if (!questions) {
                const error = new Error('No questions found');
                throw error;
            }

            return questions;
        } catch (error) {
            console.log(error);
        }
    })
}