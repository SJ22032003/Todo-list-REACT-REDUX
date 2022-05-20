import React from "react";
import { useSelector } from "react-redux";
import ListItems from "./ListItems";
function List() {
  const myList = useSelector((state) => state.Reducer);
  return (
    <>
      <div>
        {myList.data.map((item, index) => (
          <ListItems key={item.id} item={item.data} id={item.id}/>
        ))}
      </div>
    </>
  );
}

export default List;
