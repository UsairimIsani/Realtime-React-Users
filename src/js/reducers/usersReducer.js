import db from "../firebase/firebase";
export default () => {
    const users = [];
    // db.ref("users").once("value", snap => {
    //     users.push(snap.val());
    // })
    db.ref("users").on("child_added" , snap => {
        users.push(snap.val());
    }) 
return users;

}
