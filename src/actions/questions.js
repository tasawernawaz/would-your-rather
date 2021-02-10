import { createQuestionApi, getQuestions } from '../utils/api'


export const CREATE_QUESTION = "CREATE_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question
    }
}


export function receiveQuestion (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function createQuestionCreator (option1, option2) {
    return (dispatch, getState) => {
        const { authUser: author } = getState()
        return createQuestionApi({option1, option2, author}).then((question) => {
            dispatch(createQuestion(question))
        })
    }
}

export function receiveQuestionCreator () {
    return (dispatch) => {
        return getQuestions().then(questions => {
            dispatch(receiveQuestion(questions))
        })
    }
}
