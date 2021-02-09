import { CREATE_QUESTION } from '../actions/questions'

export default function questions (state={}, action) {
    switch(action.type) {
        case CREATE_QUESTION:
            return {
                ...state,
                [questions.id]: action.question
            }
        default:
            return state
    }
}