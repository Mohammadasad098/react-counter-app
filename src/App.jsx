import React from 'react'
import { useState } from "react"

const App = () =>{
  const [num , setNum] = useState(0)


  const add = ()=>{
    setNum(num + 1)
  }

  const less = ()=>{
    setNum(num - 1)
  }




  return(
    <div className='text-center my-5'>
    <h1>React Counter App</h1> <br />
    <h2 className='text-danger'>{num}</h2> <br />
    <button type="button" class="btn btn-warning" onClick={add}>Counter Add</button> &nbsp;&nbsp;
    <button type="button" class="btn btn-warning" onClick={less}>Counter less</button>
    </div>
  )
}

export default App 