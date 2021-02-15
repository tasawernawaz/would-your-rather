import { CREATE_QUESTION, RECEIVE_QUESTIONS, SAVE_VOTE } from '../actions/questions'

export default function questions (state={}, action) {
    switch(action.type) {
        case CREATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_VOTE:
            const {qid, answer, authedUser} = action.data
            return {
                    ...state,
                    [qid]: {
                      ...state[qid],
                      [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                      }
                    }
                  }
        default:
            return state
    }
}