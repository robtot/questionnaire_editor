let nextQuestionId = 0
export const addQuestion = question => {
  return {
    type: 'ADD_QUESTION',
    id: nextQuestionId++,
    question
  }
}