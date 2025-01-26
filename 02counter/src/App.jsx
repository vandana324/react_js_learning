import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter] = useState(15)
  // let counter = 15;
  const addvalue = () =>{
    console.log("value added",counter)
    counter = counter+1
    setCounter(counter)
  }

  const removevalue= () =>{
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter)
    }else{
        counter == 0;
    }
  }



  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addvalue}>add value {counter}</button>
     <br />
     <br />
     <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
