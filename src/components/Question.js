import React from 'react'
import PropTypes from 'prop-types'

function OptionsList(props) {
  const options = props.options
  const type = props.type
  if (options) {
    const optList = options.map(function(option) {
      return (
        <li key={option} className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type={type} disabled />
            <span>{option}</span>
          </div>
        </li>
      )
    })

    return <ul className="list-group list-group-flush">{optList}</ul>
  } else {
    return null
  }

}

const Question = ({ onQuestionDeleteClick, text, type, options }) => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-8">
          <h5 className="card-title">
            {text}
          </h5>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-secondary">Edit question</button>
          <button type="button" className="btn btn-warning" onClick={onQuestionDeleteClick}>Delete question</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6 className="card-subtitle text-muted">
            {type}
          </h6>
        </div>
      </div>
    </div>
    <OptionsList options={options} type={type} />
  </div>
)

Question.propTypes = {
  onQuestionDeleteClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  rank: PropTypes.number
}

export default Question