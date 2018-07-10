import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>
          Send GET /api/notes
        </button>
      </div>
    );
  }

  onClick(ev) {
    console.log('Sending a GET API Call !!!');
    axios
      .get('http://127.0.0.1:8000/api/notes/')
      .then(res => {
        console.log(res);
      })
      .then(response => {
        console.log(JSON.stringify(response));
      });
  }
}

export default App;
