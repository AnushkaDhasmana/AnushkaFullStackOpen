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
      <Part a={props.parts[0]} />
      <Part a={props.parts[1]} />
      <Part a={props.parts[2]} /> <br />
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
      Total Number of Exercises - {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </p>
  </>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [ { name: 'Fundamentals of React', exercises: 10 },
  { name: 'Using props to pass data', exercises: 7 },
  { name: 'State of a component', exercises: 14 } ]

  return (
    <div>
      <h1><Header coursename = {course}/></h1>
      <Content parts = {parts} /*part1={parts[0]} part2={parts[1]} part3={parts[2]}*/ />
      <Total total = {parts} /*{parts[0].exercises + parts[1].exercises + parts[2].exercises}*/ />
    </div>
  )
}

export default App