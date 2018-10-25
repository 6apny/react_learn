export const AddTodoTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task
  };
}

export const RemoveTodoTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: id
  };
}