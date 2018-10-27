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

const ADD_TASK = (state, action) => { return {...state, tasks: [...state.tasks, action.payload.task]} };
const REMOVE_TASK = (state, action) => { return {...state.tasks.filter(item => item !== action.payload.taskId)} };

export default todoReducer;