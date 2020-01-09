import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore,applyMiddleware} from "redux";
import { Provider } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Hello suresh
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
