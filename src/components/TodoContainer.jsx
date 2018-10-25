import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoComponent from './TodoComponent';

class TodoContainer extends Component {

  render() {

    return (
      <div>
        <TodoComponent />
      </div>
    );
  }
}

export function mapStateToProps(state) {

  return {
    'state': state
  };
}

export default connect(mapStateToProps, null)(TodoContainer);