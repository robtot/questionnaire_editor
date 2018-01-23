const questionInEdit = (state = [], action) => {
  switch(action.type) {
    case 'START_QUESTION_EDIT':
      return action.question
    case 'ADD_OPTION_QUESTION_IN_EDIT':
      return Object.assign({}, state, {options: state.options.concat('option ' + (state.options.length + 1))})
    case 'REMOVE_OPTION_QUESTION_IN_EDIT':
      return Object.assign({}, state, {options: [...state.options.slice(0, action.index), ...state.options.slice(action.index + 1)]})
    default:
      return null
  }

}

export default questionInEdit