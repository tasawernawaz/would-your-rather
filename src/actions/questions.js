import { createQuestionApi, getQuestions } from '../utils/api'


export const CREATE_QUESTION = "CREATE_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question
    }
}


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function createQuestionCreator (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authUser: author } = getState()
        return createQuestionApi({optionOneText, optionTwoText, author}).then((question) => {
            dispatch(createQuestion(question))
        })
    }
}


export function receiveQuestionCreator() {
    return (dispatch) => {
        return getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}