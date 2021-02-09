import {
    _getUsers,
    _saveQuestion
  } from './_DATA.js'

  export function getUsers () {
    return _getUsers()
  }

  export function createQuestionApi (question) {
      return _saveQuestion(question)
  }