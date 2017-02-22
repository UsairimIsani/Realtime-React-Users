export default function collectUserData(user){
    return {
        type: "NEW_USER_ADDED",
        payload : user
    };

}