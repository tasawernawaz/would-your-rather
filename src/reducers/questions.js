//coppied same boilerplate as we did in twitter app learning

import { CREATE_QUESTION, RECEIVE_QUESTIONS, SAVE_VOTE } from '../actions/questions'

export default function questions (questions = {}, action) {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question
      }
    case RECEIVE_QUESTIONS:
      return {
        ...questions,
        ...action.questions
      }
    case SAVE_VOTE:
      const { qid, answer, authedUser } = action.data
      const votes = questions[qid][answer].votes.concat([authedUser])

      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: votes
          }
        }
      }
    default:
      return questions
  }
}
