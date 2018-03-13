import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Estate from './containers/Estate/Estate';
import classes from './App.module.css';


class App extends Component {
  render() {
    return (
      <Aux>
      <div className={classes.App}>
      <h1>Estate APP - Welcome</h1>
      </div>
      <Estate/>
      </Aux>
    );
  }
}

export default App;
