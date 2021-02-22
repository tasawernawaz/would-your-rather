import { combineReducers } from 'redux'
import users from '../reducers/users'
import authUser from '../reducers/authUser'
import questions from '../reducers/questions'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  authUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
