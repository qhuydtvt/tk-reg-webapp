import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';

import Reg from './reg/Reg';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:courseSlug" component={Reg} />
      </Switch>
    );
  }
}

export default withRouter(App);
