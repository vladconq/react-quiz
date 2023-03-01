import {QuizContext} from "../contexts/quiz";
import {useContext} from "react";
import Question from "./Question";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div>
            {quizState.showResults && (
                <div>
                    <div>Congrats!</div>
                    <div>You have completed the quiz.</div>
                    <div>
                        You've got {quizState.correctAnswerCount} of{" "}
                        {quizState.questions.length} right.
                    </div>
                    <div onClick={() => dispatch({type: 'RESTART'})}>Restart</div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div>
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question/>
                    <div onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next question</div>
                </div>
            )
            }
        </div>
    )
}

export default Quiz