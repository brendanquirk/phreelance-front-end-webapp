import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Landing Page</h1>
        <a href='/Dashboard'>Go to Dashboard</a><br/>
        <a href='/Profile'>Go to Profile Page</a>
      </div>
    );
  }
}

export default Landing;
