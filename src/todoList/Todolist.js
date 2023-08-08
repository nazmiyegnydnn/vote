import React from 'react'
import './Todolist.scss'
import Todo from '../todo/Todo'
import { useSelector } from "react-redux";

const Todolist = () => {
const { todos } = useSelector((state) => state.app);

  return (
    <div>
      <ul>
         {
            todos.map((todo) => (
               <Todo todo={todo}/>
            ))
         }
      </ul>
    </div>
  )
}

export default Todolist