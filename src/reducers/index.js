import { combineReducers } from 'redux'
import questions from './questions'
import questionInEdit from './questionInEdit'

const questionsApp = combineReducers({
  questions,
  questionInEdit
})

export default questionsApp