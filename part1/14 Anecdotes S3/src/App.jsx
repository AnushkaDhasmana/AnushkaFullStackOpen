import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}> {text} </button>
  )
}

const Highest = ({votes, anecdotes}) =>{
  let max=votes[0]
  const top = (votes) =>{
    let ans=0
    //console.log(max)
    for (let i=0; i<=votes.length; i++)
    {
      if (votes[i]>max)
      {
        max=votes[i]
        ans=i
      }
    }
    //console.log(max)
    return (ans)
  }
  //console.log(top)
  const help = top(votes)
  //console.log(help)

  if (max === 0)
  {
    return(
      <p> No votes yet </p>
    )
  }
  return(
    <p> {anecdotes[help]} </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  //console.log('init votes: ', votes)

  const handleNew = () =>{
    let x = Math.floor((Math.random() * 10) + 1);
    while(x>=anecdotes.length)
      x = Math.floor((Math.random() * 10) + 1);
    setSelected(x)
  }

  const handleVote = () =>{
    const copy = [...votes]
    //console.log("copy before", copy)
    copy[selected]+=1
    //console.log("copy after", copy)
    setVote(copy)
  }
  
  return (
    <div>
      <h3> {anecdotes[selected]} </h3>
      <p> This anecdote has {votes[selected]} votes </p> <br/> <br/>
      <Button onClick={handleNew} text='Next Anecdote' > </Button> &emsp;
      <Button onClick={handleVote} text='Upvote' > </Button>
      <br/> <br/> <br/> <br/>
      <h5> - Top Voted Anecdote - </h5>
      <Highest votes={votes} anecdotes={anecdotes}> </Highest>
      <br/> <br/>
    </div>
  )
}

export default App