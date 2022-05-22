import React from "react";
import { useState } from "react";
import { FaTrash, FaPen , FaCheck } from "react-icons/fa";
import { deleteTodo, isDone , editTodo } from "../Context/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ListItems({ item, id, checked }) {
  const myTheme = useSelector((state) => state.changeTheme.check);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const [editText , setEditText] = useState(item);
  const [showInput, setShowInput] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showTick , setShowTick] = useState(false);
  const handleEdit = () => {
    setShowInput(!showInput);
    setShowText(!showText);
    setShowTick(!showTick);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // console.log(editText);
    dispatch(editTodo(id , editText));
    setShowInput(!showInput);
    setShowText(!showText);
    setShowTick(!showTick);
  }

  const checkTheme = {
    backgroundColor: myTheme && "#cfcfcf",
  };
  const done = {
    textDecoration: checked && "line-through",
    color: checked && "grey",
  };
  return (
    <div className="list-item m-2 p-3 text-lg" style={checkTheme}>
      <div>
        <input
          type="checkbox"
          onClick={() => dispatch(isDone(id))}
          onChange={(e) => {}}
          checked={checked}
          className="checkbox checkbox-xs"
        />
        <div className="inline">
          <span className="list-item-text" style={done} hidden={showText}>
            {item}
          </span>
          <form className="form inline m-2" onSubmit={handleEditSubmit}>
            <input type="text" className="input input-xs" hidden={showInput}  value={editText} onChange={(e) => setEditText(e.target.value) }/>
          </form>
        </div>
      </div>
      <div>
        <button className="btn btn-sm m-1" onClick={handleEdit}>
          <FaPen hidden={showTick}/>
          <FaCheck hidden={!showTick} onClick={handleEditSubmit} style={{color:"pink"}}/>
        </button>
        <button className="btn btn-sm m-1" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ListItems;
