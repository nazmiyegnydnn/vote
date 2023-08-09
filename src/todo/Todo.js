import React from "react";
import { useDispatch } from "react-redux";
import { incrementPoints, decreasePoints } from "../appSlice";
import "./Todo.scss";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(incrementPoints({ todoId: todo.id }));
  };
  const handleDislikeClick = () => {
    dispatch(decreasePoints({ todoId: todo.id }));
  };

  return (
    <div className="todo">
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
    </div>
  );
};

export default Todo;
