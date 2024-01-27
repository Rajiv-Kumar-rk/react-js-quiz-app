import { useContext } from 'react';
import styles from '../styles/QuizCardFooter.module.css';
import { QuizContext } from '../store/quizStore';

function QuizCardFooter(){

  let {currIndex, data, setCurrIndex, setQues, setSelectedOption, setResponse, scoreBoard, setScoreBoard} = useContext(QuizContext);

  function handleNextBtn(){
    //change the page index to next
    setCurrIndex((prevCurrIndex)=> {
      //update ques state
      setQues(data[prevCurrIndex]);

      //reset the selectedOption state to null when ques state gets updated
      setSelectedOption((prevSelectedOption)=>null);

      return prevCurrIndex+1;
    });

  }

  function handleSubmitBtn(){
    //change status of scoreBoard state
    setScoreBoard((scoreBoard) => !scoreBoard);
  }

  function handleReTakeQuizBtn(){
    //change the scoreBoard state
    setScoreBoard((scoreBoard) => !scoreBoard);

    //clear response data
    setResponse((response)=>{
      return [];
    })

    //re-set the selectedOption state to null
    setSelectedOption((prevSelectedOption)=>null);

    //re-set the currIndex to 1
    setCurrIndex((currIndex)=>{
      return currIndex = 1;
    })
  }


  return (
    <div className={ styles.footer }>
      {
        (scoreBoard !== true)? 
        (
          (currIndex < data.length)? 
          (<button className={ styles.nextBtn } onClick={() => handleNextBtn()}>Next</button>) : 
          (<button className={ styles.submitBtn } onClick={() => handleSubmitBtn()}>Submit</button>)
        ) :
        (<button className={ styles.submitBtn } onClick={()=>handleReTakeQuizBtn()}>Take the quiz again...</button>)
      }
      
      {
        scoreBoard? 
        null:
        <div className={ styles.pagination }>{currIndex} of {data.length} Questions</div>
      }
      
    </div>
  )
}

export default QuizCardFooter;