import React from 'react'
import "./Todo.scss"

const Todo = ({todo}) => {

  return (
    <div className='todo'>
    <div className='todo-points'>
        <p>{todo.points}</p>
        <span>POİNTS</span>
    </div>
    <div className='todo-name'>
    <p>{todo.name}</p>
    <li className='todo-items'>{todo.url}</li>
    </div>
    </div>
  )
}

export default Todo