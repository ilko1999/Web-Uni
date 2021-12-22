import './App.css';
import { useRef, useState, useEffect } from 'react'

function App() {

  const questionRef = useRef()
  const addedQuestionOnRef = useRef()
  const inputonRef = useRef()
  const answerOnRef = useRef()

  const quizData = [
    {
      question: 'Is React cool?',
      answer: 'i like angular and vue more'
    },
    {
      question: 'Is Facebook cool?',
      answer: 'YES, MARK SPARE ME PLEASE'
    },{
      question: 'is iliyan famous',
      answer: 'the most famous front end dev to ever exist!!!!'
    },{
      question: 'what s your favourite OS',
      answer: 'Arch Linux'
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState(null)

  useEffect(() => {
    questionRef.current.innerHTML = quizData[currentQuestion].question
  }, [currentQuestion])

    function checkAnswers() {
      if( currentAnswer === quizData[currentQuestion].answer){
        setIsCorrect(true)
      }
    }

    function goToNext() {
      setCurrentQuestion(currentQuestion + 1)
      setCurrentAnswer('')
      setIsCorrect(false)
    }

  return (
    <div className="App">
      <h1>Quiz app</h1>
      <div>
        <p>Status { isCorrect ? '😊' : '😭' }</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Question_Mark.svg" style={{'width': '50'}}/>
          <h3>Question:</h3> <p ref={questionRef}></p>
          <label>
            Your answer:
              <input ref={inputonRef} value={currentAnswer} onChange={e => setCurrentAnswer(e.target.value)} type="text" name="answer" />
            </label>
        <button onClick={checkAnswers}  ref={answerOnRef} >Submit answer!</button>
            { isCorrect ? <div>
              <h3> Your answer was correct?</h3>
              <button onClick={() => goToNext()}>Go to the next question</button>
            </div> : null}
      </div>
    </div>
  );
}

export default App;
