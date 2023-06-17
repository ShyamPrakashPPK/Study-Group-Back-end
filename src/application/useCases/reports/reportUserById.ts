import reportEntity from '../../../entities/report';

export default function reportUserById(user:any, reportedUser:any, reason:any, dbRepository:any) {
    if (!user) {
        const error = new Error('user_id is required');
        throw error;
    }

    if (!reportedUser) {
        const error = new Error('reported user id is required');
        throw error;
    }

    const newReport = reportEntity(user, reportedUser, reason);

    return dbRepository.reportUserById(newReport);
}