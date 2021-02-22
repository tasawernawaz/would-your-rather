import { combineReducers } from 'redux'
import users from '../reducers/users'
import authUser from '../reducers/authUser'
import questions from '../reducers/questions'

export default combineReducers({
  authUser,
  users,
  questions
})
