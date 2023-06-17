import reportEntity from '../../../entities/report';

export default function reportBlogById(blogId:any, userId:any, reason:any, dbRepository:any) {
    if (!blogId) {
        const error = new Error('Blog Id is required');
        throw error;
    }

    if (!userId) {
        const error = new Error('userId is required');
        throw error;
    }

    const newReport = reportEntity(blogId, userId, reason);

    return dbRepository.reportBlogById(newReport);
}