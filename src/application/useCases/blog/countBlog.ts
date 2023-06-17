export default function count(id:any, dbRepository:any) {
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return dbRepository.count(id)
}