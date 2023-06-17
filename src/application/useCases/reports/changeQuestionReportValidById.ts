export default async function changeReportValidById(reportId:any, dbRepository:any, questionRepository:any) {
    if (!reportId) {
        const error = new Error('Report Id is required');
        throw error;
    }

    return dbRepository.changeReportValidById(reportId).then((res:any) => {
        if (!res) {
            const error = new Error('Report not found');
            throw error;
        }
        console.log(res)

        if (res.valid) {
            return questionRepository.changeReportCount(res.content, -1);
        }

        if (!res.valid) {
            return questionRepository.changeReportCount(res.content, 1);
        }
    })
}