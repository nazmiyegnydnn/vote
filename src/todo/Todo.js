import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementPoints, decreasePoints ,deleteTodos } from "../appSlice";
import "./Todo.scss";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false); 

  const handleLikeClick = () => {
    dispatch(incrementPoints({ todoId: todo.id }));
  };
  const handleDislikeClick = () => {
    dispatch(decreasePoints({ todoId: todo.id }));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const deleteHandler = () => {
    dispatch(deleteTodos({ todoId: todo.id }));
  }

  return (
    <div
      className="todo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="todo-points">
        <p>{todo.points}</p>
        <span>POINTS</span>
      </div>
      <div className="todo-name">
        <p>{todo.name}</p>
        <li className="todo-items">{todo.url}</li>
      </div>
      <div className="comment">
        <button className="like" onClick={handleLikeClick}>
          🠕 Up Vote
        </button>
        <button className="dislike" onClick={handleDislikeClick}>
          🠗 Down Vote
        </button>
        </div>
        <div className="todo-delete">
        {isHovered && (
            <button className="delete" onClick={deleteHandler}>━</button>
        )}
        </div>
    </div>
  );
};

export default Todo;
