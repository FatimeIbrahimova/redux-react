import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sort } from '../redux/actions/todoAction'

const Parent = () => {
    const todo=useSelector(state=>state.todoReducer)
    const counter=useSelector(state=>state.counterReducer)
    console.log(todo);
    const dispatch=useDispatch()
  return (
    <div>
        {todo.map((t,index)=>{
            return <span key={index}>{t}</span>
        })}
        <button onClick={()=>dispatch({type:"ADD",payload:counter})}>Add</button>
        {/* <button onClick={()=>dispatch({type:"SORT"})}>Sort</button> */}
        <button onClick={()=>dispatch(sort(todo))}>Sort</button>
    </div>
  )
}

export default Parent