import React from 'react'
import './Todolist.scss'
import Todo from '../todo/Todo'

const Todolist = ({todos }) => {
  return (
    <div>
      <ul>
         {
            todos.map((todo) => (
               <Todo
               name={todo.name}
               url={todo.url}
               points={todo.points}
            />
            ))
         }
      </ul>
    </div>
  )
}

export default Todolist