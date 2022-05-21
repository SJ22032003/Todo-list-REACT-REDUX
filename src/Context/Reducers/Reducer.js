const intialState = JSON.parse(localStorage.getItem("mainData")) || {
  data: [],
};

const Reducer = (state = intialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TODO":
      const { id, data, checked } = action.payload;
      newState = {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            data: data,
            checked: checked,
          },
        ],
      };
      localStorage.setItem("mainData", JSON.stringify(newState));
      return newState;

    case "DELETE_TODO":
      newState = {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.payload)],
      };
      localStorage.setItem("mainData", JSON.stringify(newState));
      return newState;

    case "REMOVE_TODO":
      newState = {
        ...state,
        data: [],
      };
      localStorage.setItem("mainData", JSON.stringify(newState));
      return newState;
    case "IS_DONE":
      newState = {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
      localStorage.setItem("mainData", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default Reducer;
