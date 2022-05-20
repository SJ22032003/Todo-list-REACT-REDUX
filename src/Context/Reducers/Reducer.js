const intialState = {
  data: [],
};

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.payload)],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default Reducer;
