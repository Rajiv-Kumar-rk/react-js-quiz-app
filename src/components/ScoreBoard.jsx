import { useContext } from 'react';
import styles from '../styles/ScoreBoard.module.css';
import { QuizContext } from '../store/quizStore';

function ScoreBoard(){
  let {response, data} = useContext(QuizContext);
  
  let score=0;

  for(let i=0; i<response.length; i++){
    let responseObj = response[i];
    for(let j=0; j<data.length; j++){
      let quesObj = data[j];
      if (responseObj.questionId === quesObj.id && responseObj.answerId === quesObj.answer){
        score = score+1;
      }
    }
  }

  return (
    <div className={ styles.scoreBoardContainer }>
      <h3>Total Score</h3>
      <h2>{score}/{data.length}</h2>
    </div>
  )
}

export default ScoreBoard;