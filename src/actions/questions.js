import { createQuestionApi } from '../utils/api'

export const CREATE_QUESTION = "CREATE_QUESTION"


export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question
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