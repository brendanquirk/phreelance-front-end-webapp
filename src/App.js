import React, { Component } from 'react';
import {Route, Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='./components/Landing.js'/>
        </Router>
      </div>
    );
  }
}

export default App;
