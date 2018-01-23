import React from 'react'
import PropTypes from 'prop-types'
import './EditQuestion.css'

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

function QuestionFormIfVisible(props) {
  const questionInEdit = props.questionInEdit

  if (questionInEdit !== null) {
    return (
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title">
                    {questionInEdit.text}
                  </h5>
                </div>
                <div className="col-4">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="card-subtitle text-muted">
                    {questionInEdit.type}
                  </h6>
                </div>
              </div>
            </div>
          </div>
    )
  } else {
    return null
  }

}

const EditQuestion = ({questionInEdit, cancelQuestionEdit}) => (
  <div id="overlay" className="overlay" style={{display: (questionInEdit !== null) ? 'block' : 'none'}} onClick={function() {overlayOff(); cancelQuestionEdit();}}>
    <div id="overlay-content" className="overlay-content container d-flex align-items-center" onClick={function(e) {e.stopPropagation()}}>
      <QuestionFormIfVisible questionInEdit={questionInEdit} />
    </div>
  </div>
)

EditQuestion.propTypes = {
  questionInEdit: PropTypes.object,
  cancelQuestionEdit: PropTypes.func.isRequired
}

export default EditQuestion