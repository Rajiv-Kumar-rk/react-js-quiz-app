import { useContext, useState } from 'react';
import styles from '../styles/QuesCard.module.css';
import { QuizContext } from '../store/quizStore';

function QuesCard() {
  let {currIndex, ques, selectedOption, setSelectedOption, setResponse} = useContext(QuizContext);
  
  function handleAddResponse(quesId, selectedOptionId){
    setResponse((response)=>{
      console.log('response change')
      
      let targetPosition = response.findIndex((responseObj)=>responseObj.questionId === quesId);
      console.log('selected response index:', targetPosition);

      if(targetPosition !== -1){
        //update target response
        response[targetPosition].answerId = selectedOptionId;
        console.log('updated response:', response);
        return response;
      }
      else{
        //add current ques response
        const newResponse = {
          'questionId': quesId,
          'answerId': selectedOptionId
        }

        let updatedResponse = [...response, newResponse];
        console.log('updated response:', updatedResponse);
        return updatedResponse;
      }

    })
  }

  const handleOptionClick = (quesId, selectedOptionId) => {
    if (selectedOption === selectedOptionId) {
      // If the selected option is clicked again, reset 'selectedOption' state to null 
      setSelectedOption(null);
    } 
    else {
      // Otherwise, set the selected option
      setSelectedOption(selectedOptionId);

      //add response 
      handleAddResponse(quesId, selectedOptionId);
    }
  };

  return (
    <div className={ styles.quesContainer }> 
      <h2 className={ styles.question }>{currIndex}. {ques.question}</h2>
      <ul>
        {ques.options.map((option) => (
          <li key={option.id} 
            className={`${styles.options} ${
              selectedOption === option.id ? styles.selectedOption : ''
            }`}
            onClick={(e)=>handleOptionClick(ques.id, option.id)}>
              {option.answer}
          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default QuesCard;
