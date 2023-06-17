export default function findQuestionByTag(tags:any, id:any, questionRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    if (!tags) {
        const error = new Error('tags is required');
        throw error;
    }

    return questionRepository.findQuestionByTag(tags, id).then((questions:any) => {
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