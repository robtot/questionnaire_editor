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
      return state.map(question => {
        let order = action.questionOrder.filter(order => order.id === question.id)[0]
        return Object.assign({}, question, order)
      }).sort(function(a,b) {
        if (a['rank'] < b['rank']) return -1;
        if (a['rank'] > b['rank']) return 1;
        return 0
      })

    case 'EDIT_QUESTION':
      return state.map((question, index) => {
        if (question.id === action.question.id) {
          return Object.assign({}, question, action.question)
        } else {
          return question
        }

      })
    default:
      return state
  }

}

export default questions