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
        <div className="col-12 col-md-8 col-lg-10">
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
        <div className="col-12 col-md-4 col-lg-2">
          <select
            name="question-type"
            className="custom-select"
            ref={node => {
              questionType = node
            }}
          >
            <option value="text">Text</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
          </select>
          <button type="submit" className="btn btn-primary btn-block">
            Add question
          </button>
        </div>
      </div>
    </form>
  )
}
AddQuestion = connect()(AddQuestion)

export default AddQuestion