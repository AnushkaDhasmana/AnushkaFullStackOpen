import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}> {text} </button>
  )
}

const StatisticLine = ({ text, value }) =>{
  if (text === 'Positive')
    return(
      <>
        {text} - {value} % 
      </>
    )
  return(
    <>
      {text} - {value}
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0)
    return(
      <>Submit feedback to see feedback statistics</>
  )  
  return(
    <>
      <p>
        <StatisticLine text='Good' value ={good} /> &emsp;
        <StatisticLine text='Neutral' value ={neutral} /> &emsp;
        <StatisticLine text='Bad' value ={bad} />
      </p>
      <p>
        <StatisticLine text='Total' value={good+neutral+bad} /> &emsp;
        <StatisticLine text='Average' value={(good-bad)/(good+neutral+bad)} /> &emsp;
        <StatisticLine text='Positive' value={(good/(good+neutral+bad))*100} />
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
      <Button onClick={() => setGood(good+1)} text={'Good'} /> &emsp;
      <Button onClick={() => setNeutral(neutral+1)} text={'Neutral'} /> &emsp;
      <Button onClick={() => setBad(bad+1)} text={'Bad'} />
      <br/> <br/> 
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
