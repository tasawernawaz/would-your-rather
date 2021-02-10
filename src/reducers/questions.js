import { CREATE_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions (state={}, action) {
    switch(action.type) {
        case CREATE_QUESTION:
            return {
                ...state,
                [questions.id]: action.question
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}