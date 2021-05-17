import questions from "./questions.json"

export const getQuestions = () => {
  const { quiz } = questions
  const quizLength = quiz.length

  return {
    quiz,
    quizLength
  }
}