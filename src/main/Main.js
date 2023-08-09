import React from "react";
import "./Main.scss";
import { useState } from "react";
import { submitTodoHandler } from "../appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const { todos } = useSelector((state) => state.app);
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputUrlHandler = (e) => {
    setInputUrl(e.target.value);
  };

  const returnHandler = () => {
    navigate("/todoList");
  };

  const handleButtonFocus = () => {
    dispatch(
      submitTodoHandler({
        name: inputText,
        url: inputUrl,
        points: Math.floor(Math.random() * 10),
        id: Math.floor(Math.random() * 10),
      })
    );
    const isEmpty = (str) => !str.trim().length;
    if (isEmpty(inputText) || isEmpty(inputUrl)) {
      setAlertWarning(true);
      setTimeout(() => {
        setAlertWarning(false);
      }, 1000);
    } else {
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 1000);
      setInputText("");
      setInputUrl("");
    }
  };

  return (
    <div className="main">
      {todos.length === 0 ? null : (
        <div className="return">

          <button onClick={returnHandler}>← Return to List</button>  
        </div>
      )}
      <div className="todo-title">
        <h2>Add New Link</h2>
      </div>
      <div className="todo-link">
        <div className="link-name">
          <p>Link Name</p>
          <input
            placeholder="Stack Overflow"
            onChange={inputTextHandler}
            value={inputText}
          />
        </div>
        <div className="link-url">
          <p>Link URL</p>
          <input
            placeholder="https://stackoverflow.com"
            onChange={inputUrlHandler}
            value={inputUrl}
          />
        </div>
      </div>
      <div className="todo-button">
        <button onClick={handleButtonFocus}>ADD</button>
      </div>
      <div className="alert-wrapper">
        {alertWarning ? (
          <div className="alert-warning">
            <div>Bu alanları boş geçemezsiniz !!</div>
          </div>
        ) : (
          ""
        )}
        {alertSuccess ? (
          <div className="alert-success">
            <div>Başarıyla eklendi..</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Main;
