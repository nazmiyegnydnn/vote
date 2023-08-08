import React from 'react'
import "./Todo.scss"

const Todo = ({name,url,points }

) => {
  return (
    <div className='todo'>
    <div className='todo-points'>
        <p>{points}</p>
        <span>POİNTS</span>
    </div>
    <div className='todo-name'>
    <p>{name}</p>
    <li className='todo-items'>{url}</li>
    </div>
    </div>
  )
}

export default Todo