import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoInput from './TodoInput';
import ShowedList from './ShowedList';
import { AddTodTask, RemoveTodoTask } from '../actions/addDelTodo';

class TodoComponent extends Component {

  aTask = (task => {

    this.props.addTask(task);

  });

  deletedTask = (dTask => {

    this.props.delTask(dTask);

  });

  render() {
    let tasks = this.props.tasks;

    return (
      <div>
        <TodoInput pushedTask={this.aTask} />
        <ShowedList tasks={tasks} delItem={this.deletedTask} />
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