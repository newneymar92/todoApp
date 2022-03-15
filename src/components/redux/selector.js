import { createSelector } from "reselect";

// Cach 1
// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     // Kiểm tra trong tên của từng phần tử trong todoList có chứa kí tự được search hay không
//     return todo.name.includes(searchTextSelector(state));
//   });

//   return todosRemaining;
// };

export const searchTextSelector = (state) => state.filters.search;

export const statusFilterSelector = (state) => state.filters.status;

export const priorityFilterSelector = (state) => state.filters.priority;

export const todoListSelector = (state) => state.todoList;

//Cach 2 dung reselect
export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  priorityFilterSelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);

//reselect
