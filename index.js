import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore,applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./reducers.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let store = createStore(rootReducer);
    return (
      <div>
      <Provider store={store}>
        <Hello name={this.state.name} />
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
