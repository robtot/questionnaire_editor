const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      if (action.question.type === 'radio' || action.question.type === 'checkbox') {
        return [
          ...state,
          {
            id: action.id,
            text: action.question.text,
            type: action.question.type,
            options: ['option 1', 'option 2']
          }
        ]

      } else {
        return [
          ...state,
          {
            id: action.id,
            text: action.question.text,
            type: action.question.type
          }
        ]

      }

    default:
      return state
  }

}

export default questions