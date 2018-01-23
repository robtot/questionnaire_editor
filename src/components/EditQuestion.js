import React from 'react'
import PropTypes from 'prop-types'
import './EditQuestion.css'

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

function QuestionFormIfVisible(props) {
  const questionInEdit = props.questionInEdit
  const saveQuestion = props.saveQuestion
  let questionText
  if (questionInEdit !== null) {
    return (
      <div className="card">
        <form onSubmit={e => {
          e.preventDefault()
          if (!questionText.value.trim()) {
            return
          }

          saveQuestion({ id: props.questionInEdit.id, text: questionText.value})
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

const EditQuestion = ({questionInEdit, cancelQuestionEdit, saveQuestion}) => (
  <div id="overlay" className="overlay" style={{display: (questionInEdit !== null) ? 'block' : 'none'}} onClick={function() {overlayOff(); cancelQuestionEdit();}}>
    <div id="overlay-content" className="overlay-content container d-flex align-items-center" onClick={function(e) {e.stopPropagation()}}>
      <QuestionFormIfVisible questionInEdit={questionInEdit} saveQuestion={saveQuestion} />
    </div>
  </div>
)

EditQuestion.propTypes = {
  questionInEdit: PropTypes.object,
  cancelQuestionEdit: PropTypes.func.isRequired,
  saveQuestion: PropTypes.func.isRequired
}

export default EditQuestion