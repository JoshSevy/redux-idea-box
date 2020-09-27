export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false}];
    case 'IS_COMPLETED':
      return state.map((todo) => {
        if(action.id === todo.id) {
          return { id: todo.id, todo: todo.todo, completed: !todo.completed};
        } 
        return todo;
      });
    default: 
      return state;
  }
}