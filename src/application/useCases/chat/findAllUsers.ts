

export default function findAllUsers( userRepository: any) { 
    
    console.log("reached");
    
 

    return userRepository.findAllUsers().then((users:any) => { 
        try {
            if (!users) {
                const error = new Error('No user found')
                throw error
            }
            return users;
        } catch (error) {
            console.log(error);
        }
    })
}
