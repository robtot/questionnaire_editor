const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        {
          id: action.id,
          text: action.question.text,
          type: action.question.type
        }
      ]
    default:
      return state
  }
}

export default questions