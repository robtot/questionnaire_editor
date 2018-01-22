import React from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'

let AddQuestion = ({ dispatch }) => {
  let questionText, questionType

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!questionText.value.trim()) {
          return
        }
        dispatch(addQuestion({ text: questionText.value, type: questionType.value}))
        questionText.value = ''
        questionType.value = 'text'
      }}
    >
      <div className="form-row">
        <div className="col-12">
          <textarea
            name="question"
            type="text"
            className="form-control"
            placeholder="Question"
            ref={node => {
              questionText = node
            }}
          />
        </div>
      </div>
      <div className="form-row justify-content-between">
        <div className="col-auto">
          <select
            name="question-type"
            className="custom-select"
            ref={node => {
              questionType = node
            }}
          >
            <option value="text">text answer</option>
            <option value="radio">radio buttons answer</option>
            <option value="checkbox">checkbox buttons answer</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add Question
          </button>
        </div>
      </div>
    </form>
  )
}
AddQuestion = connect()(AddQuestion)

export default AddQuestion