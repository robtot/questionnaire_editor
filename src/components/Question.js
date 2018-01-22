import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ onClick, text, type }) => (
  <div
    className="card"
    onClick={onClick}
  >
    <div className="card-body">
      <h5 className="card-title">
        {text}
      </h5>
      <h6 className="card-subtitle text-muted">
        {type}
      </h6>
    </div>
  </div>
)

Question.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Question