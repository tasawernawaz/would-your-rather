import {
    _getUsers,
    _getQuestions,
    _saveQuestion
  } from './_DATA.js'

  export function getUsers () {
    return _getUsers()
  }

  export function getQuestions () {
    return _getQuestions()
  }

  export function createQuestionApi (question) {
      return _saveQuestion(question)
  }