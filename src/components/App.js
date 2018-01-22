import React from 'react'
import AddQuestion from '../containers/AddQuestion'
import VisibleQuestionList from '../containers/VisibleQuestionList'

const App = () => (
  <div className="container">
    <AddQuestion />
    <VisibleQuestionList />
  </div>
)

export default App
