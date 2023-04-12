import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons1 from './Buttons1'
import Buttons2 from "./Buttons2"

function App() {


  const [left, setLeft] = useState(null)
  const [right, setRight] = useState(null)
  const [age, setAge] = useState(0)
  useEffect(()=>{

    setAge(()=>{
      return right + (left*10)
    })
  },[left, right])
  
  const buttons1 = [];
  const buttons2 = [];
  for(let i=0; i<10; i++){
    buttons1.push({
      name: `${i*10} to ${(i*10)+9}`,
      value: parseInt(i),
      key: i
    })
    buttons2.push({
      name: i,
      value: parseInt(i)*10,
      key: i
    })

    

  }

  return (
    <div className="App">
      <h1>{left}{right}</h1>
      <h1>How Old Are You ?</h1>
      <Buttons1 setLeft={setLeft} buttons1={buttons1} />
      <Buttons2 setRight={setRight} buttons2={buttons2} />
      <h1>{age}</h1>
    </div>
  )
}

export default App
