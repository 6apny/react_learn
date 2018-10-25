import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
  }

  getValue = (event) => {this.setState({task: event.target.value}); }

  pushTask = (event) => {
    event.preventDefault();

    let task = event.target[0].value;

    if(task) {
      this.props.pushedTask(task);

      this.state.setState({inputValue: ''});
    }
  };

  render() {
    
    return(
      <div>
        <input
          type="text"
          placeholder="Task"
          onChange={this.getValue}
          value={this.state.inputValue} />
        <button onClick={this.pushTask}>Add task</button>
      </div>
    );
  }
}