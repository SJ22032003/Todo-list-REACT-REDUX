import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteTodo, isDone } from "../Context/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ListItems({ item, id , checked }) {
  const myTheme = useSelector((state) => state.changeTheme.check);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const checkTheme = {
    backgroundColor: myTheme && "#cfcfcf",
  }
  const done = {
    textDecoration : checked && "line-through",
    color: checked && "grey",
  }
  return (
    <div className="list-item m-2 p-3 text-lg" style={checkTheme}>
      <div>
        <input type="checkbox" onClick={() => dispatch(isDone(id))} defaultChecked={checked} className="checkbox checkbox-xs"  />
        <div className="inline">
          <span className="list-item-text" style={done}>{item}</span>
        </div>
      </div>
      <div>
        <button className="btn btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ListItems;
