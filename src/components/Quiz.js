import {useContext} from 'react'
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
import Question from './Question'
import {QuizContext} from '../contexts/quiz'

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  const isCorrectAnswer =
    quizState.currentAnswer && quizState.currentAnswer === currentQuestion.correctAnswer
  const correctBackgroundClass = isCorrectAnswer ? 'correct-background' : ''

  const isWrongAnswer =
    quizState.currentAnswer && quizState.currentAnswer !== currentQuestion.correctAnswer
  const wrongBackgroundClass = isWrongAnswer ? 'wrong-background' : ''

  return (
    <div>
      {quizState.showResults && (
        <div>
          <div>Congrats!</div>
          <div>You have completed the quiz.</div>
          <div>
            You've got {quizState.correctAnswerCount} of {quizState.questions.length} right.
          </div>
          <div onClick={() => dispatch({type: 'RESTART'})}>Restart</div>
        </div>
      )}
      {!quizState.showResults && (
        <motion.div className={`${wrongBackgroundClass} ${correctBackgroundClass}`}>
          <div>
            Question {quizState.currentQuestionIndex + 1} /{quizState.questions.length}
          </div>
          <Question />
          <Button onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next question</Button>
        </motion.div>
      )}
    </div>
  )
}

export default Quiz
