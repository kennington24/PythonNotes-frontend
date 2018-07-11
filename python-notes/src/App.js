import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/api/notes/')

      .then(data => {
        this.setState({ Data: data.results });
      })
      .then(response => {
        console.log(JSON.stringify(response));
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Django Notes</h1>
        {this.state.data.map((Data, i) => (
          <div className="Data">
            <div className="noteTitle">
              <strong>Name</strong>: {Data.title}
            </div>
            <div className="noteContent">
              <strong>Birth Year:</strong> {Data.content}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <button type="button" onClick={this.onClick}>
  //         Send GET /api/notes
  //       </button>
  //     </div>
  //   );
  // }

  // onClick(ev) {
  //   console.log('Getting your notes :)');
  //   axios
  //     .get('http://127.0.0.1:8000/api/notes/')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .then(response => {
  //       console.log(JSON.stringify(response));
  //     });
  // }

  // componentDidMount() {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/notes/`)
  //     .then(res => this.setState({ posts: res.data }))
  //     .catch(err => console.log(err));
  // }
}

export default App;
