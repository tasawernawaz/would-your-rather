import {
  createQuestionApi,
  getQuestions,
  saveQuestionAnswerApi
} from '../utils/api'
import { showLoading, hideLoading} from 'react-redux-loading'

export const CREATE_QUESTION = 'CREATE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_VOTE = 'SAVE_VOTE'

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

export function saveQuestionAnswer (data) {
  return {
    type: SAVE_VOTE,
    data
  }
}

export function saveQuestionAnswerCreator (questionId, selectedOption) {
  return (dispatch, getState) => {
    const { authUser } = getState()
    const data = {
      authedUser: authUser,
      qid: questionId,
      answer: selectedOption
    }
    return saveQuestionAnswerApi(data)
      .then(() => {
        dispatch(showLoading())
        dispatch(saveQuestionAnswer(data))
        dispatch(hideLoading())
      })
  }
}

export function createQuestionCreator (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser: author } = getState()
    return createQuestionApi({ optionOneText, optionTwoText, author }).then((question) => {
      dispatch(createQuestion(question))
    })
  }
}

export function receiveQuestionCreator () {
  return (dispatch) => {
    return getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}
