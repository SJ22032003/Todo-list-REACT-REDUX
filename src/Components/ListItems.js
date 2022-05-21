import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteTodo, isDone } from "../Context/Action";
import { useDispatch } from "react-redux";
function ListItems({ item, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="list-item m-2 p-3">
      <div>
        <input type="checkbox" onClick={() => dispatch(isDone(id))} />
        <div className="inline">
          <span className="list-item-text">{item}</span>
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
