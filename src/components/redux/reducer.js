import { combineReducers } from "redux";
import filterReducer from "../Filters/filterReducer";
import todoReducer from "../TodoList/todoReducer";


const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
