import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import 'reactstrap'
import Landing from './components/Landing'
import Main from './components/Main'
import Profile from './components/Profile'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={(props)=> <Landing/>}/>
          <Route path='/Dashboard' render={(props)=> <Main/>}/>
          <Route path='/Profile' render={(props)=> <Profile/>}/>
          <Route path='/Login' render={(props)=> <Login/>}/>
          <Route path='/Signup' render={(props)=> <Signup/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
