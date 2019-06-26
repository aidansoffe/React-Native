import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const movies = [{ name: 'Dark Phoenix', year: 2019 },
               { name: 'Bad Moms', year: 2018 },
               { name: 'X Men', year: 2020, producer: 'D Cameron' }];
export default class MoviePage extends Component{
  render() {
    return (
      <div className="App">
      { movies.map(movie => <Movie movieName={movie.name} releaseDate={movie.year} producerName={movie.producer}/>)
      }
    </div>
    )
  }
}

const Movie = ({ movieName, releaseDate, producerName}) => (
    <div>
      <li>{movieName}</li>
      <li>{releaseDate}</li>
      <li>{producerName}</li>
    </div>
  )

const rootElement = document.getElementById("root");
ReactDOM.render(<MoviePage />, rootElement);


// https://codesandbox.io/s/determined-fog-jmo4g
