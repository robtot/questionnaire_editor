import React from 'react'
import PropTypes from 'prop-types'
import './EditQuestion.css'

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

function QuestionOptionsFields(props) {
  const type = props.questionInEdit.type
  const options = props.questionInEdit.options
  const addOption = props.addOption
  if (type === 'radio' || type === 'checkbox') {  
    const optList = options.map(function(option) {
      return (
        <li key={option} className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type={type} disabled />
            <textarea type="text" className="question-option-field form-control" defaultValue={option} placeholder="Option description" />
          </div>
        </li>
      )
    })

    return (
      <div>
        <div className="form-row">
          <ul className="list-group col">{optList}</ul>
        </div>
        <div className="form-row">
          <button type="button" className="btn btn-secondary" onClick={addOption}>Add option</button>
        </div>
      </div>
    )
  } else {
    return null
  }

}

function QuestionFormIfVisible(props) {
  const questionInEdit = props.questionInEdit
  const saveQuestion = props.saveQuestion
  const addOption = props.addOption
  let questionText
  if (questionInEdit !== null) {
    return (
      <div className="card" onClick={function(e) {e.stopPropagation()}}>
        <form onSubmit={e => {
          e.preventDefault()
          if (!questionText.value.trim()) {
            return
          }

          let options
          if (questionInEdit.type === 'radio' || questionInEdit.type === 'checkbox' ) {
            let optionElems = [].slice.call(document.getElementsByClassName('question-option-field'))
            options = optionElems.map(function(elem) { return elem.value })
          } else {
            options = null
          }

          saveQuestion({ id: questionInEdit.id, text: questionText.value, options: options})
        }}>
          <div className="card-body">
            <div className="form-row">
              <div className="col">
                <h6 className="card-subtitle text-muted">
                  {questionInEdit.type}
                </h6>
              </div>
            </div>
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
                  defaultValue={questionInEdit.text}
                />
              </div>
            </div>
            <QuestionOptionsFields questionInEdit={questionInEdit} addOption={addOption} />
            <div className="form-row">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  } else {
    return null
  }

}

const EditQuestion = ({questionInEdit, cancelQuestionEdit, saveQuestion, addOption}) => (
  <div id="overlay" className="overlay" style={{display: (questionInEdit !== null) ? 'block' : 'none'}} onClick={function() {overlayOff(); cancelQuestionEdit();}}>
    <div id="overlay-content" className="overlay-content container d-flex align-items-center">
      <QuestionFormIfVisible questionInEdit={questionInEdit} saveQuestion={saveQuestion} addOption={addOption} />
    </div>
  </div>
)

EditQuestion.propTypes = {
  questionInEdit: PropTypes.object,
  cancelQuestionEdit: PropTypes.func.isRequired,
  saveQuestion: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired
}

export default EditQuestion