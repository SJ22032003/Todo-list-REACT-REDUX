/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  isComplete,
  allComplete,
} from "../Context/Action";
function Input() {
  const myListLength = useSelector(
    (state) =>
      state.Reducer.data.filter((item) => item.checked === false).length
  );
  const myArrayState = useSelector((state) => state.Reducer.data);
  console.log(myArrayState);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter some text");
      setText("");
    } else {
      dispatch(addTodo(text));
      setText("");
    }
  };
  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all the todos?")) {
      dispatch(removeTodo());
    }
  };
  const handleAllComplete = () => {
    dispatch(allComplete());
    // window.location.reload();
  };
  return (
    <>
      <div className="clear-left m-3">
        <div className="badge m-2">{myListLength} Left</div>
        <button
          className="badge badge-secondary m-2"
          style={{ display: myListLength === 0 ? "none" : "" }}
          onClick={handleClear}
        >
          Clear All
        </button>
        <button
          className="badge badge-primary m-2 rounded-full"
          style={{
            display: myArrayState.length === myListLength ? "none" : "",
          }}
          onClick={() => dispatch(isComplete())}
          title="remove completed"
        >
          Clear Done
        </button>
        <button
          className="badge badge-warning m-2 rounded-full"
          style={{ display: myListLength === 0 ? "none" : "" }}
          onClick={handleAllComplete}
          title="put all completed"
        >
          <FaCheck />
        </button>
      </div>
      <div className="todo-list-form m-4">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="text"
            placeholder="what now ?....."
            className="input m-1 sm:w-30 md:w-80"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn m-1">
            <FaPlus />
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
