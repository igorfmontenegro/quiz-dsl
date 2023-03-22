import S from "./styles.module.scss"

export function QuestionAwnser({question, answer, handleAnswerQuestion}){
    return(
        <button className ={S.container} onClick= {(event) => handleAnswerQuestion(event,question,answer)}> 
            {answer} 
        </button>
    )
}