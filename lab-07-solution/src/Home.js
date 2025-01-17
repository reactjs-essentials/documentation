import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const data = [
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "https://www.ecartelera.com/carteles/1700/1762/001_p.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "890,617",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Rated": "PG-13",
      "Released": "14 Dec 2007",
      "Runtime": "101 min",
      "Genre": "Drama, Horror, Sci-Fi",
      "Director": "Francis Lawrence",
      "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      "Language": "English",
      "Country": "USA",
      "Awards": "9 wins & 21 nominations.",
      "Poster": "https://www.ecartelera.com/carteles/1600/1643/001_p.jpg",
      "Metascore": "65",
      "imdbRating": "7.2",
      "imdbVotes": "533,874",
      "imdbID": "tt0480249",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
      ]
    },
    {
      "Title": "300",
      "Year": "2006",
      "Rated": "R",
      "Released": "09 Mar 2007",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Fantasy",
      "Director": "Zack Snyder",
      "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      "Language": "English",
      "Country": "USA",
      "Awards": "16 wins & 42 nominations.",
      "Poster": "https://www.ecartelera.com/carteles/1300/1370/001_p.jpg",
      "Metascore": "52",
      "imdbRating": "7.7",
      "imdbVotes": "611,046",
      "imdbID": "tt0416449",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
      ]
    }
  ]

  const [films, setFilms] = useState(data);

  const [counter, setCounter] = useState (0)

  const handleDeleteFilm = (imdbID) => {
    const newFilms = films.filter((film) => film.imdbID !== imdbID);
    setFilms(newFilms);
  };

  useEffect(() => {
    console.log("useEffect executed");
    console.log("Total films in list " + films.length)
    console.log("Counter " + counter)
  },[]);

  return (
    <>
      <h1>Films List with Components</h1>

      <section>
        <h4>Counter : {counter}</h4>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        <button onClick={() => setCounter(counter - 1)}> - </button>
      </section>

      <FilmList films={films} handleDeleteFilm={handleDeleteFilm}/>
    </>
  );
};

export default Home;
