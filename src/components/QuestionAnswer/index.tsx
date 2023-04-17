import { MouseEvent } from "react";
import S from "./styles.module.scss"
import { Question } from "../Quiz";

interface QuestionAwnserProps{
    question: Question;
    answer: string;
    handleAnswerQuestion: (
        event: MouseEvent<HTMLButtonElement>,
        question: Question,
        answer: string
    ) => void
}

export function QuestionAwnser({question, answer, handleAnswerQuestion} : QuestionAwnserProps){
    return(
        <button className ={S.container} onClick= {(event) => handleAnswerQuestion(event,question,answer)}> 
            {answer} 
        </button>
    )
}