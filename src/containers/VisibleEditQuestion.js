import { connect } from 'react-redux'
import { editQuestion, cancelQuestionEdit, addOptionQuestionInEdit } from '../actions'
import EditQuestion from '../components/EditQuestion'

const mapStateToProps = state => {
  return {
    questionInEdit: state.questionInEdit
  }

}

const mapDispatchToProps = dispatch => {
  return {
    cancelQuestionEdit: () => {
      dispatch(cancelQuestionEdit())
    },
    saveQuestion: question => {
      dispatch(editQuestion(question))
    },
    addOption: () => {
      dispatch(addOptionQuestionInEdit())
    }
    
  }

}

const VisibleEditQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQuestion)

export default VisibleEditQuestion