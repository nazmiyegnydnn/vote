import React, { useState, useEffect } from "react";
import "./Todolist.scss";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Todolist = () => {
  const [sortBy, setSortBy] = useState("all");
  const todos = useSelector((state) => state.app.todos);
  const [sortedTodos, setSortedTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let sorted = [...todos]; // Kopyasını oluşturuyoruz, orijinal array'i değiştirmemek için
    if (sortBy === "completed") {
      sorted = sorted.sort((a, b) => a.points - b.points); // Küçükten büyüğe sıralama
    } else if (sortBy === "uncompleted") {
      sorted = sorted.sort((a, b) => b.points - a.points); // Büyükten küçüğe sıralama
    }
    setSortedTodos(sorted);
  }, [todos, sortBy]);

const submitAddHandler = () => {
  navigate('/main')
}

  return (
    <div className="todoList">
      <div className="submitLink">
        <button onClick={submitAddHandler}><span>+</span></button>
        <p>SUBMIT A LINK</p>
      </div>
      <div className='select'>
     <select name='todos' className='filter-todo' onChange={(e) => setSortBy(e.target.value)}>
        <option value="all">All</option>
        <option value="completed" >Less Voted "A→Z"</option>
        <option value="uncompleted">Most Voted "Z←A"</option>
    </select>
        </div>
      <ul>
        {sortedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
