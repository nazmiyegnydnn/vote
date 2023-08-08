import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import { useState } from 'react';
import Todolist from '../todoList/Todolist';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [todos, setTodos] = useState([]);
  const [points, setPoints] = useState([])

  
  return (
    <div>
        <Header/>
        <Main
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        />
        <Todolist
        todos={todos}
        points={points}
        />
    </div>
  )
}

export default Home