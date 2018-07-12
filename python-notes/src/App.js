import React, { Component } from 'react';
import axios from 'axios';

export default class Notes extends Component {
  state = {
    notes: [],
    personalNotes: []
  };

  componentDidMount() {
    axios
      .get(`https://djorg-kenny.herokuapp.com/api/personal_notes/`, {})
      .then(response => {
        this.setState({ personalNotes: response.data });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://djorg-kenny.herokuapp.com/api/notes/`, {})
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          {this.state.notes.map(item => (
            <p key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </p>
          ))}
        </div>
        <h1>Personal Notes</h1>
        <div>
          {this.state.personalNotes.map(item => (
            <h2 key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </h2>
          ))}
        </div>
      </div>
    );
  }
}
