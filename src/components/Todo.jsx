import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {
    const todo=useSelector(state=>state)
    console.log(todo);
  return (
    <div>
        <span>{todo}</span>
      <button>Add</button>
    </div>
  )
}

export default Todo
