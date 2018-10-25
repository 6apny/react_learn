const initState = {
  tasks: [],
  showTasks: true
};

const todoReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return ADD_TASK(state, action);
    case 'REMOVE_TASK':
      return REMOVE_TASK(state, action);
    default:
      return state;
  }
};

const ADD_TASK = (state, action) => { return {...state, items: [...state.tasks, action.payload.task]} };
const REMOVE_TASK = (state, action) => { return {...state.task.filter(item => item.id !== action.payload.id)} };

export default todoReducer;