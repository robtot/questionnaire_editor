import React from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'

let AddQuestion = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addQuestion(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Question
        </button>
      </form>
    </div>
  )
}
AddQuestion = connect()(AddQuestion)

export default AddQuestion