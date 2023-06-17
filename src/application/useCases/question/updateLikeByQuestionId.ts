export default function updateLikeByQuestionId(questionId:any, button:any, questionRepository:any) {
    if (button === 'like')
        return questionRepository.updateLikeById(questionId);
    if (button === 'dislike')
        return questionRepository.updatedisLikeById(questionId);
}