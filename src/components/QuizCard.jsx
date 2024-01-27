import { useContext } from "react";
import ScoreBoard from "./ScoreBoard";
import QuesCard from "./QuesCard";
import QuizCardFooter from "./QuizCardFooter";
import styles from '../styles/QuizCard.module.css';
import { QuizContext } from "../store/quizStore";

function QuizCard(){
  
  let { scoreBoard } = useContext(QuizContext);

  return (
    <div className={ styles.container }>
        <h1>Quiz App</h1>
        <hr />
        {
        scoreBoard? 
        <ScoreBoard/> :
        <QuesCard/>
        }
        
        <QuizCardFooter/>
    </div>
  )
}

export default QuizCard;