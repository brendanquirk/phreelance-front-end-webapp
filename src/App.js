import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Main'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={(props)=> <Landing/>}/>
          <Route path='/Dashboard' render={(props)=> <Main/>}/>
          <Route path='/Profile' render={(props)=> <Profile/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
