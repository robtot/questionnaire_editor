import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

const QuestionList = ({ questions, onQuestionClick, onQuestionDeleteClick }) => (
  <div>
    {questions.map(question => (
      <Question key={question.id} {...question} onClick={() => onQuestionClick(question.id)} onQuestionDeleteClick={() => onQuestionDeleteClick(question.id)}/>
    ))}
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
  onQuestionClick: PropTypes.func.isRequired,
  onQuestionDeleteClick: PropTypes.func.isRequired
}

export default QuestionList