import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddProperty from './AddProperty';
import Clock from './Clock';
import Debug from './Debug';
import TodoContainer from '../components/TodoContainer';

class Container extends Component {

    render() {

        let { state } = this.props;

        return (
          <div className="Container">
            <Clock />
            <AddProperty />
            <Debug data={state} />
            <TodoContainer />
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state
    };

}

export default connect(mapStateToProps, null)(Container);
