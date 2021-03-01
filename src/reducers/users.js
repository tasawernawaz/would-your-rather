import { RECEIVE_USERS } from '../actions/users'

export default function users (users = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...users,
        ...action.users
      }
    default:
      return users
  }
}
