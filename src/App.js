import React, { Component } from 'react';
import FormMovie from './FormMovie';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovie: [],
    }
  }

  addMovie = newMovie => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(movie => {
        if (movie.error) {
          alert(movie.error);
        } else {
          alert(`Film ajouté avec succès !`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout de votre film.');
      });
  }
  render() {
    return (
      <div className="App">
        <FormMovie onSubmitForm={this.addMovie} />
      </div>
    );
  }
}

export default App;
