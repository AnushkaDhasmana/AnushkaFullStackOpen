import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return(
    <>
      <p>
        Good - {good} &emsp;
        Neutral - {neutral} &emsp;
        Bad - {bad}
      </p>
      <p>
        Total - {good+neutral+bad} &emsp;
        Average - {(good-bad)/(good+neutral+bad)} &emsp;
        Positive - {(good/(good+neutral+bad))*100} %
      </p>
    </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Feedback Portal</h1>
      <p>How was your experience with Unicafe ? </p>
      <button onClick={() => setGood(good+1)}> Good </button> &emsp;
      <button onClick={() => setNeutral(neutral+1)}> Neutral </button> &emsp;
      <button onClick={() => setBad(bad+1)}> Bad </button>
      <br/> <br/> 
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
