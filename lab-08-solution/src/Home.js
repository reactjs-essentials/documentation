import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {

  const [films, setFilms] = useState([]);


  const handleDeleteFilm = (imdbID) => {
    const newFilms = films.filter((film) => film.imdbID !== imdbID);
    setFilms(newFilms);
  };

  useEffect(() => {
    fetch('https://apimocha.com/lab-films/films')
      .then(res => res.json())
      .then(res => setFilms(res))
  }, []);

  return (
    <>
      <h1>Films List with Components</h1>

      <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />
    </>
  );
};

export default Home;
