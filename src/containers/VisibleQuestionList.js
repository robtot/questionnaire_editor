import { connect } from 'react-redux'
import QuestionList from '../components/QuestionList'
import { deleteQuestion, sortQuestions } from '../actions'

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
    onQuestionDeleteClick: id => {
      dispatch(deleteQuestion(id))
    },
    onQuestionSort: sortedList => {
      const mappedSortedList = sortedList.map(function(item) {
        return {
          id: item.content.key,
          rank: item.rank
        }

      })
      
      dispatch(sortQuestions(mappedSortedList))
    }

  }
}

const VisibleQuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default VisibleQuestionList