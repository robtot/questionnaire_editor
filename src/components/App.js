import React from 'react'
import AddQuestion from '../containers/AddQuestion'
import VisibleQuestionList from '../containers/VisibleQuestionList'
import VisibleEditQuestion from '../containers/VisibleEditQuestion'

const App = () => (
  <div>
    <VisibleEditQuestion />
    <div className="container">
      <VisibleQuestionList />
      <AddQuestion />
    </div>
  </div>
)

export default App
