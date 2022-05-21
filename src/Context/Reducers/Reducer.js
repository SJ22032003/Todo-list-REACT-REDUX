const intialState = {
  data: [],
};

const Reducer = (state = intialState, action) => {
  var newState = state;
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem("mainData", JSON.stringify(newState));
      const { id, data, checked } = action.payload;
      return {
        ...newState,
        data: [
          ...newState.data,
          {
            id: id,
            data: data,
            checked: checked,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...newState,
        data: [...newState.data.filter((item) => item.id !== action.payload)],
      };
    case "REMOVE_TODO":
      return {
        ...newState,
        data: [],
      };
    case "IS_DONE":
      return {
        ...newState,
        data: newState.data.map((item) =>
          item.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    default:
      return newState;
  }
};

export default Reducer;
