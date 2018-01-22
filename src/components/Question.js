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

const Question = ({ onClick, text, type, options }) => (
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
    <OptionsList options={options} type={type} />
  </div>
)

Question.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array
}

export default Question