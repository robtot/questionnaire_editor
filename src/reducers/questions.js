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
    case 'DELETE_QUESTION':
      return state.filter(question => question.id !== action.id)
    case 'SORT_QUESTIONS':
      action.questionOrder.forEach(function(questionOrder) {
        let questionIndex = state.findIndex((question) => question.id === questionOrder.id)
        state[questionIndex].rank = questionOrder.rank
      })

      return state
    default:
      return state
  }

}

export default questions