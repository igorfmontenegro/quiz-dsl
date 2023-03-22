import React, {useState} from "react"
import { QuestionAwnser } from "../QuestionAnswer"
import { Result } from "../Result";
import { ProgressBar } from "../ProgressBar";

import S from "./styles.module.scss"

const Questions = [
    {
        id: 1,
        question: "Qual é o meu nome?",
        answers: ["Miguel", "Luis", "Igor", "Lucas"],
        correctAnswer: "Igor"
    },
    {
        id: 2,
        question: "Qual é a minha idade?",
        answers: ["22", "23", "26", "28"],
        correctAnswer: "23"
    },
    {
        id: 3,
        question: "O que eu sou?",
        answers: ["Desenvolvedor", "Engenheiro", "Autônomo", "Policial"],
        correctAnswer: "Autônomo"
    }
]

export function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isTakingQuiz, setIsTakingQuiz] = useState(true);
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const handleNextQuestion = () => {
        if(currentQuestionIndex < Questions.length -1){
            setCurrentQuestionIndex(currentQuestionNumber)
            
        } else{
            setIsTakingQuiz(false);
        }
        
        setIsCurrentQuestionAnswered(false);
    }

    const handleAnswerQuestion = (event, question, userAnswer) => {
        if (isCurrentQuestionAnswered){
            return
        }
        const isCorrectAnswer = question.correctAnswer === userAnswer;
        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect;

        event.currentTarget.classList.toggle(resultClassName);

        if (isCorrectAnswer){
             setCorrectAnswerCount(correctAnswerCount + 1)
        }

        setIsCurrentQuestionAnswered(true);
       
    }

    const handleTryAgain = () => {
        setIsTakingQuiz(true);
        setCurrentQuestionIndex(0);
        setCorrectAnswerCount(0);
    }

    const quizSize = Questions.length
    const currentQuestion = Questions[currentQuestionIndex];
    const currentQuestionNumber = currentQuestionIndex + 1;
    const navigationButtonText = currentQuestionNumber == quizSize ? "Ver Resultado" : "Próxima Pergunta";
    

    return (
        <div className={S.container}>
            <div className={S.card}>
                {isTakingQuiz ? (               
                    <div className={S.quiz}>
                        <ProgressBar size={quizSize} currentStep = {currentQuestionNumber} />
                        <header className = {S.quizHeader}>
                            <span> PERGUNTA {currentQuestion.id}/{quizSize} </span>
                            <p> {currentQuestion.question} </p>
                        </header>

                        <uL className={S.answers}>
                            {currentQuestion.answers.map(answer => (
                                <lI key={answer}>
                                    <QuestionAwnser question = {currentQuestion} answer = {answer} handleAnswerQuestion = {handleAnswerQuestion}/>
                                </lI>
                            ))}
                        </uL>

                        <button className={S.navigationBtn} onClick={handleNextQuestion}>
                            {navigationButtonText}
                        </button>
                    </div>
                ) : (
                    <Result correctAnswerCount = {correctAnswerCount} quizSize = {quizSize} handleTryAgain = {handleTryAgain}/>
                )
            }
            </div>
        </div>
    )
}