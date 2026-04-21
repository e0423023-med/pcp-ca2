const AppReducer = (state, action) => {
  switch (action.type) {

    case "SET_DATA":
      return {
        ...state,
        items: Array.isArray(action.payload) ? action.payload : [],
      };

    case "DISPLAY_ORDERS":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "Filter_Orders":
      return {
        ...state,
        items: state.items.filter(i => i?.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;