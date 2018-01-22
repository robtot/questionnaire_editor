let nextQuestionId = 0
export const addQuestion = text => {
  return {
    type: 'ADD_QUESTION',
    id: nextQuestionId++,
    text
  }
}

export const toggleQuestion = id => {
  return {
    type: 'TOGGLE_QUESTION',
    id
  }
}