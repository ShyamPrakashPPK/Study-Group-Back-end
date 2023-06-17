export default async function changeReportValidById(reportId:any, dbRepository:any, userRepository:any) {
    if (!reportId) {
        const error = new Error('Report Id is required');
        throw error;
    }

    // await userRepository.(userId);
    return dbRepository.changeReportValidById(reportId).then((res:any) => {
        if (!res) {
            const error = new Error('Report not found');
            throw error;
        }

        if (res.valid) {
            return userRepository.changeReportCount(res.content, -1);
        }

        if (!res.valid) {
            return userRepository.changeReportCount(res.content, 1);
        }
    })
}