import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

let ShowOutput = ({questions}) => {
  return (
    <div className="row">
      <div className="col">
        <p>{JSON.stringify(questions)}</p>
      </div>
    </div>
  )

}

ShowOutput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowOutput)

export default ShowOutput