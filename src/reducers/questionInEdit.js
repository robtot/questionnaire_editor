const questionInEdit = (state = [], action) => {
  switch(action.type) {
    case 'START_QUESTION_EDIT':
      return action.question
    default:
      return null
  }

}

export default questionInEdit