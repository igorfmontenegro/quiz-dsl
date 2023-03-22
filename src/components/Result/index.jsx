import S from "./styles.module.scss"

export function Result ({correctAnswerCount, quizSize, handleTryAgain}){
    return (
        <div className = {S.container}> 
            <h1> Resultado </h1>
            <p> Você acertou {correctAnswerCount} de {quizSize} perguntas! </p>

            <button onClick = {handleTryAgain}>
                Tente Novamente
            </button>
        </div>
    )
}