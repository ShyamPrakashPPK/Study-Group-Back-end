export default function blockUserById(userId:any, userRepository:any) {

    if (!userId) {
        const error = new Error('userId is required');
        throw error;
    }

    return userRepository.blockUserById(userId).then((res:any) => {
        if (res.status)
            return { status: false };
        else
            return { status: true };
    })
}