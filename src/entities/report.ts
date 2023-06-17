export default function report(content:any, user:any, reason:any) {
    return {
        getContent: () => content,
        getUser: () => user,
        getReason: () => reason
    }
}