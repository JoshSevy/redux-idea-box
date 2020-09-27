export const addToDo = (todo) => ({
  type: "ADD_TODO",
  todo,
});

export const isCompleted = (id) => ({
  type: "IS_COMPLETED",
  id,
});