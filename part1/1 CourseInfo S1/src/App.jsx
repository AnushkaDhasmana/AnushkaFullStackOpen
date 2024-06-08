import { useState } from 'react'

/*HEADER COMPONENT*/
const Header = (props) =>
{
  return (
    <div>
      <p> 
        {props.coursename} 
      </p>
    </div>
  )
}

/*CONTENT COMPONENT*/
const Content = (props) =>
{
  return (
  <>
    <p>
      {props.part1} - {props.exercises1} <br />
      {props.part2} - {props.exercises2} <br />
      {props.part3} - {props.exercises3} <br />
    </p>
  </>
  )
}

/*TOTAL COMPONENT*/
const Total = (props) =>
{
  return (
  <>
    <p>
      Total Number of Exercises - {props.total}
    </p>
  </>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header coursename = {course}/></h1>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
