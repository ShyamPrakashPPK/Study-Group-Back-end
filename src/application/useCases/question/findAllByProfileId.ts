export default function findAllByProfileId(id:any, questionRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return questionRepository.findAllByProfileId(id).then((questions:any) => {
        try {
            if (!questions) {
                const error = new Error('No question found');
                throw error;
            }

            return questions;
        } catch (error) {
            console.log(error);
        }
    })
}