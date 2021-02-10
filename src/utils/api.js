import {
    _getUsers,
    _getQuestions,
    _saveQuestion
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function getUsers () {
    return _getUsers()
  }

  export function getQuestions () {
    return _getQuestions()
  }

  export function createQuestionApi (question) {
      return _saveQuestion(question)
  }