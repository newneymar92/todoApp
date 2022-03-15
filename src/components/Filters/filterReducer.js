const initState = {
  search: "",
  status: "all",
  priority: [],
};

//reducer để lắng nghe các dispatch và cập nhật lại state trong store
const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    case "filter/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };

    case "filter/priorityFilterChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
