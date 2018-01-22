const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_QUESTION':
      return state.map(question =>
        (question.id === action.id) 
          ? {...question, completed: !question.completed}
          : question
      )
    default:
      return state
  }
}

export default questions