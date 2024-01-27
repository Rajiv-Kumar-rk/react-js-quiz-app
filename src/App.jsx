import './App.css'
import QuizContextProvider from './store/quizStore';
import QuizCard from './components/QuizCard';

function App() {
  return (
    <QuizContextProvider>
      <QuizCard />
    </QuizContextProvider>
  )
}

export default App
