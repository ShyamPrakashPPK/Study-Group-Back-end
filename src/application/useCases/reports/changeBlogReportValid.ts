export default async function changeReportValidById(reportId:any, dbRepository:any, blogRepository:any) {
    if (!reportId) {
        const error = new Error('Report Id is required');
        throw error;
    }

    return dbRepository.changeReportValidById(reportId).then((res:any) => {
        if (!res) {
            const error = new Error('Report not found');
            throw error;
        }

        if (res.valid) {
            return blogRepository.changeReportCount(res.content, -1);
        }

        if (!res.valid) {
            return blogRepository.changeReportCount(res.content, 1);
        }
    })
}