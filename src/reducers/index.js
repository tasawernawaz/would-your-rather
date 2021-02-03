import { combineReducers } from 'redux'
import users from '../reducers/users'
import authUser from '../reducers/authUser'


export default combineReducers({
    authUser,
    users,
})