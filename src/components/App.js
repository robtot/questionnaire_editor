import React from 'react'
import AddQuestion from '../containers/AddQuestion'
import VisibleQuestionList from '../containers/VisibleQuestionList'
import VisibleEditQuestion from '../containers/VisibleEditQuestion'
import ShowOutput from '../containers/ShowOutput'

const App = () => (
  <div>
    <VisibleEditQuestion />
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Questionnaire Editor</h1>
        </div>
      </div>
      <VisibleQuestionList />
      <AddQuestion />
      <ShowOutput />
    </div>
  </div>
)

export default App
