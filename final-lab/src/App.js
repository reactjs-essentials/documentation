import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('http://localhost:3005/films')
    .then(res => res.json())
    .then(response => {
      const data  = response
      console.log(data)
      setFilms(data)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      <section>    
         {films.map(film => <div className="filmCard"> 
                                <img src={film.Poster} key={film.imdbID} alt={film.Title}/> 
                                {film.Title} - {film.Year}
                    </div>)}
      </section>
    </div>
  );
}
