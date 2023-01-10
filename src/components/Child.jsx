import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Child = () => {
    const counter=useSelector(state=>state.counterReducer)
    // console.log(counter);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>increase</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>decrease</button>
        <button onClick={()=>dispatch({type:"RESET"})}>reset</button>
    </div>
  )
}

export default Child