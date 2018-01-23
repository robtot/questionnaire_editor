import { connect } from 'react-redux'
import QuestionList from '../components/QuestionList'
import { deleteQuestion, sortQuestions, startQuestionEdit } from '../actions'

const mapStateToProps = state => {
  return {
    questions: state.questions
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
          id: parseInt(item.content.key, 10),
          rank: item.rank
        }

      })
      
      dispatch(sortQuestions(mappedSortedList))
    },
    onStartQuestionEdit: id => {
      dispatch(startQuestionEdit(id))
    }

  }
}

const VisibleQuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default VisibleQuestionList