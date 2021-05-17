import { getQuestions } from 'services/getQuestions'

const UseQuestions = () => {
  const { quiz, quizLength } = getQuestions()
  const randomQuestion = Math.floor(Math.random() * quizLength)

  const { question, answer } = quiz[randomQuestion]

  return {
    question,
    answer
  }
}

export default UseQuestions