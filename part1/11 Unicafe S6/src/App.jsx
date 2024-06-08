import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}> {text} </button>
  )
}

const StatisticLine = ({ text, value }) =>{
  if (text === 'Positive')
    return(
        <tr> 
          <td> {text} </td>
          <td> {value}% </td> 
        </tr>
    )
  return(
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0)
    return(
      <>Submit feedback to see feedback statistics</>
  )  
  return(
    <>
      <table>
        <StatisticLine text='Good' value ={good} /> 
        <StatisticLine text='Neutral' value ={neutral} /> 
        <StatisticLine text='Bad' value ={bad} />
        <StatisticLine text='Total' value={good+neutral+bad} />
        <StatisticLine text='Average' value={(good-bad)/(good+neutral+bad)} /> 
        <StatisticLine text='Positive' value={(good/(good+neutral+bad))*100} />
      </table>
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
