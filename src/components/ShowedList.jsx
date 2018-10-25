import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ShowedList extends Component {
  render() {
    let showedList = this.props.tasks.map((item, i) => {
      return (
        <li key={i}>
          <div>{item}</div>
          <button onClick={this.deletedTask.bind(item, i)}>Delete task</button>
        </li>
      )
    });
    return <ul>{showedList}</ul>
  }
}