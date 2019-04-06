import React, { Component } from 'react';
import { Button } from 'reactstrap'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Phreelance</h1>
        <a href='/Login'><Button color="success">Login</Button></a><br/>
        <a href='/Signup'><Button color="primary">Sign Up</Button></a>
      </div>
    );
  }
}

export default Landing;
