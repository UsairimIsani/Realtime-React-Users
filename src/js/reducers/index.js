import { combineReducers } from "redux";
import users from "./usersReducer";
import collectUserData from "./collectUserData";
const rootReducer = combineReducers({
    users : users,
    collectUserData : collectUserData

})
export default rootReducer;