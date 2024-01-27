import { createContext, useState } from "react"

const data = [
    {
      'id': 1,
      'question': 'What does HTML stand for?',
      'options': [
        {'id': 1, 'answer': 'Hyper Text Markup Language'},
        {'id': 2, 'answer': 'Highly Typed Machine Learning'},
        {'id': 3, 'answer': 'Home Tool Markup Language'},
        {'id': 4, 'answer': 'Hyperlink and Text Markup Language'}
      ],
      'answer': 1
    },
    {
      'id': 2,
      'question': 'Which HTML tag is used for creating a hyperlink?',
      'options': [
        {'id': 1, 'answer': '<link>'},
        {'id': 2, 'answer': '<a>'},
        {'id': 3, 'answer': '<hyperlink>'}
      ],
      'answer': 2
    },
    {
      'id': 3,
      'question': 'In HTML, what does the "DOCTYPE" declaration specify?',
      'options': [
        {'id': 1, 'answer': 'Document Type'},
        {'id': 2, 'answer': 'Document Template'},
        {'id': 3, 'answer': 'Document Style'},
        {'id': 4, 'answer': 'Document Text'}
      ],
      'answer': 1
    },
    {
      'id': 4,
      'question': 'Which HTML tag is used for creating an unordered list?',
      'options': [
        {'id': 1, 'answer': '<ul>'},
        {'id': 2, 'answer': '<ol>'},
        {'id': 3, 'answer': '<li>'},
        {'id': 4, 'answer': '<list>'},
        {'id': 5, 'answer': '<ul>'}
      ],
      'answer': 1
    },
    {
      'id': 5,
      'question': 'What is the purpose of the HTML "alt" attribute in an image tag?',
      'options': [
        {'id': 1, 'answer': 'Alternate text for the image'},
        {'id': 2, 'answer': 'Alignment of the image'},
        {'id': 3, 'answer': 'Attribute list for the image'}
      ],
      'answer': 1
    },
    {
      'id': 6,
      'question': 'Which HTML tag is used for creating a table?',
      'options': [
        {'id': 1, 'answer': '<table>'},
        {'id': 2, 'answer': '<tr>'},
        {'id': 3, 'answer': '<td>'},
        {'id': 4, 'answer': '<tab>'},
        {'id': 5, 'answer': '<tbl>'}
      ],
      'answer': 1
    },
    {
      'id': 7,
      'question': 'What is the purpose of the HTML "form" element?',
      'options': [
        {'id': 1, 'answer': 'Formatting text'},
        {'id': 2, 'answer': 'Creating a hyperlink'},
        {'id': 3, 'answer': 'Defining a form'},
        {'id': 4, 'answer': 'Floating an element'}
      ],
      'answer': 3
    },
    {
      'id': 8,
      'question': 'Which HTML tag is used for adding an external CSS file?',
      'options': [
        {'id': 1, 'answer': '<style>'},
        {'id': 2, 'answer': '<link>'},
        {'id': 3, 'answer': '<external>'},
        {'id': 4, 'answer': '<css>'}
      ],
      'answer': 2
    },
    {
      'id': 9,
      'question': 'What is the purpose of the HTML "span" element?',
      'options': [
        {'id': 1, 'answer': 'Defining a section in a document'},
        {'id': 2, 'answer': 'Styling inline elements'},
        {'id': 3, 'answer': 'Creating a table'},
        {'id': 4, 'answer': 'Linking to an external resource'},
        {'id': 5, 'answer': 'Grouping inline elements'}
      ],
      'answer': 2
    },
    {
      'id': 10,
      'question': 'Which HTML tag is used for creating a line break?',
      'options': [
        {'id': 1, 'answer': '<break>'},
        {'id': 2, 'answer': '<lb>'},
        {'id': 3, 'answer': '<br>'},
        {'id': 4, 'answer': '<newline>'},
        {'id': 5, 'answer': '<linebreak>'}
      ],
      'answer': 3
    }
  ];

export const QuizContext = createContext(
    {
        data: data, 
        currIndex: 1, 
        setCurrIndex: ()=>{}, 
        ques: {}, 
        setQues: ()=>{}, 
        selectedOption: null,
        setSelectedOption: ()=>{},
        response: [], 
        setResponse: ()=>{}, 
        scoreBoard: false, 
        setScoreBoard: ()=>{}
    }
)

function QuizContextProvider({ children }){
    console.log('Store component')
    
    let [currIndex, setCurrIndex] = useState(1);
  
    let [ques, setQues] = useState(data[currIndex-1]);

    let [selectedOption, setSelectedOption] = useState(null);
  
    let [response, setResponse] = useState([]);  
  
    let [scoreBoard, setScoreBoard] = useState(false);

    let storeData = {
        data: data, 
        currIndex: currIndex, 
        setCurrIndex: setCurrIndex, 
        ques: ques, 
        setQues: setQues,  
        selectedOption: selectedOption,
        setSelectedOption: setSelectedOption,
        response: response, 
        setResponse: setResponse, 
        scoreBoard: scoreBoard, 
        setScoreBoard: setScoreBoard
    }

    return (
        <QuizContext.Provider value={storeData}>
            { children }
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;