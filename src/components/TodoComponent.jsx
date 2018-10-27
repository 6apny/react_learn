import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoInput from './TodoInput';
import ShowedList from './ShowedList';
import { AddTodTask, RemoveTodoTask } from '../actions/addDelTodo';

class TodoComponent extends Component {

  aTask = (task => {

    this.props.addTask(task);

  });

  deletedTask = (task => {

    this.props.delTask(task);

  });

  render() {
    let tasks = this.props.tasks;

    return (
      <div>
        <TodoInput pushedTask={this.aTask} />
        <ShowedList tasks={tasks} dTask={this.deletedTask} />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {

  return {
    addTask(task) {

      dispatch({type: 'ADD_TASK', payload: {task} });

    },

    delTask(taskId) {

      dispatch({type: 'REMOVE_TASK', payload: {taskId} })
    }
  };
}

export function mapStateToProps(state) {

  return {
    'tasks': state.todo.tasks
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);