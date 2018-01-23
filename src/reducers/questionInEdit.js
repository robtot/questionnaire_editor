const questionInEdit = (state = [], action) => {
  switch(action.type) {
    case 'START_QUESTION_EDIT':
      return action.question
    case 'ADD_OPTION_QUESTION_IN_EDIT':
      console.log('adding option')
      return Object.assign({}, state, {options: state.options.concat('option ' + (state.options.length + 1))})
    default:
      return null
  }

}

export default questionInEdit