import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

const QuestionList = ({ questions, onQuestionClick }) => (
  <div>
    {questions.map(question => (
      <Question key={question.id} {...question} onClick={() => onQuestionClick(question.id)} />
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
  onQuestionClick: PropTypes.func.isRequired
}

export default QuestionList