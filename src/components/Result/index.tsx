import S from "./styles.module.scss"

interface ResultProps{
    correctAnswerCount: number;
    quizSize: number;
    handleTryAgain: () => void;
}

export function Result ({correctAnswerCount, quizSize, handleTryAgain} : ResultProps){
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