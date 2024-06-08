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

/*PARTS COMPONENT*/
const Part = (props) =>
{
  console.log(props)
  return (
    <>
      <p>
        {props.a.name} - {props.a.exercises}
      </p>
    </>
  )
}

/*CONTENT COMPONENT*/
const Content = (props) =>
{
  return (
  <>
    <p>
      <Part a={props.part1} />
      <Part a={props.part2} />
      <Part a={props.part3} /> <br />
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
  const part1 = { name: 'Fundamentals of React', exercises: 10 }
  const part2 = { name: 'Using props to pass data', exercises: 7 }
  const part3 = { name: 'State of a component', exercises: 14 }

  return (
    <div>
      <h1><Header coursename = {course}/></h1>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App