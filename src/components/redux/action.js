//action creator => function

export const addTodoAction = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (data)=>{
  return {
    type:"filter/searchFilterChange",
    payload:data
  }
}

export const statusFilterChange = (data)=>{
  return {
    type:"filter/statusFilterChange",
    payload:data
  }
}

export const priorityFilterChange = (priorities)=>{
  return {
    type:"filter/priorityFilterChange",
    payload:priorities
  }
}

export const  toggleTodoStatus = (todoId)=>{
  return{
    type:"todoList/toggleTodoStatus",
    id: todoId,
  }
}