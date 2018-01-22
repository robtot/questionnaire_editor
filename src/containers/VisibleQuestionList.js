import { connect } from 'react-redux'
import QuestionList from '../components/QuestionList'
import { deleteQuestion } from '../actions'

const getVisibleQuestions = (questions) => {
  return questions
}

const mapStateToProps = state => {
  return {
    questions: getVisibleQuestions(state.questions)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQuestionClick: id => {
      // dispatch(toggleQuestion(id))
    },
    onQuestionDeleteClick: id => {
      dispatch(deleteQuestion(id))
    }

  }
}

const VisibleQuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default VisibleQuestionList