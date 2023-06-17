export default function fetchUserReportsById(userId:any, dbRepository:any) {

    if (!userId) {
        const error = new Error('userId is required');
        throw error;
    }

    return dbRepository.fetchUserReportsById(userId);
}