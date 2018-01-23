import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'
import DragSortableList from 'react-drag-sortable'
import './QuestionList.css'

function getQuestionsElemList(questions, onQuestionDeleteClick, onStartQuestionEdit) {
  let list = questions.map(question => (
    {content: <Question key={question.id} {...question} onQuestionDeleteClick={() => onQuestionDeleteClick(question.id)} onStartQuestionEdit={() => onStartQuestionEdit(question)}/>}
  ))

  return list
}

const QuestionList = ({ questions, onQuestionDeleteClick, onQuestionSort, onStartQuestionEdit }) => (
  <div className="row">
    <div className="col">
      <DragSortableList 
        items={getQuestionsElemList(questions, onQuestionDeleteClick, onStartQuestionEdit)}
        moveTransitionDuration={0.3}
        onSort={onQuestionSort}
        type="vertical"
      />
    </div>
  </div>
)

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onQuestionDeleteClick: PropTypes.func.isRequired,
  onQuestionSort: PropTypes.func.isRequired,
  onStartQuestionEdit: PropTypes.func.isRequired
}

export default QuestionList