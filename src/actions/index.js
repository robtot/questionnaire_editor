let nextQuestionId = 0
export const addQuestion = question => {
  return {
    type: 'ADD_QUESTION',
    id: nextQuestionId++,
    question
  }
  
}

export const deleteQuestion = id => {
  return {
    type: 'DELETE_QUESTION',
    id
  }

}

export const sortQuestions = questionOrder => {
  return {
    type: 'SORT_QUESTIONS',
    questionOrder: questionOrder
  }

}

export const editQuestion = question => {
  return {
    type: 'EDIT_QUESTION',
    question: question
  }

}

export const startQuestionEdit = question => {
  return {
    type: 'START_QUESTION_EDIT',
    question: question
  }

}

export const cancelQuestionEdit = () => {
  return {
    type: 'CANCEL_QUESTION_EDIT'
  }
  
}

export const addOptionQuestionInEdit = () => {
  return {
    type: 'ADD_OPTION_QUESTION_IN_EDIT'
  }

}

export const removeOptionQuestionInEdit = (index) => {
  return {
    type: 'REMOVE_OPTION_QUESTION_IN_EDIT',
    index: index
  }

}