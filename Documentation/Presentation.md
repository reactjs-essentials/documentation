# Agenda

    - Javascript basics
    - Why React
    - First react App
    - Class Component & Function Component
    - hooks
    - useState & events
    - Lists
    - Composing & Extracting Components
    - Destructuring props & update state
    - useEffect
    - fetching Data
    - custom Hooks
    - Routing
    - useParams & Link
    - Styling components
    - Forms
    - Testing
    - Context API
    - Security and Login
    - Redux
    - Tools, CI CD, Best practices, Debugging

# Javascript basics

## Scope [Link](https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11)

## Arrow Functions [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) [Link](https://www.javascripttutorial.net/es6/javascript-arrow-function/)

## Object Literal [Link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

## Destructuring [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Rest/Spread operators syntax [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```
function sumAll(...args) { // args es el nombre del array
...
}
sumAll(1,2,3)

```

```

function sum(x, y, z) {
    return x + y + z;
}
sum(...numbers)
```

## Promises and async await [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Why React

- Flexibility
- Developer Experience
- Corporate Investment
- Community
- Testability
- Framework vs. Library
- Template-centric vs. JavaScript-centric
- Separate vs. Single File

  ## First react App

  _Goal of this section, get familiar with dev environment, hands on first app developments, basic react concepts_

  ### First react app

```
  npm init -y
  npm install react react-dom next
  // add hello world component
```

intruducing [lab-00](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

### App from create react app

```
  npx create-react-app my-app
  cd my-app
  npm start
  // add hello world component
```

### React basic concepts & conventions

## Class Component & Function Component

### LAB (15 min)

#### Requirements:

```
- 2 components named: [HelloClassComponent,HelloFunctionalComponent]
- HelloClassComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Class component"
- HelloFunctinalComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Functional component"
- Render both components in App Component
```

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-01-start) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-01-solution)

### Hooks

_simple JavaScript functions that we can use to isolate the reusable part from a functional component._

- Composition vs Inheritance [link] (https://reactjs.org/docs/composition-vs-inheritance.html)

- useState & events

- TODO: [lab-00](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

```
import React from "react";
import "./style.css";

  // Function component with state hook
  // start with normal const to demonstrate non reactive variables, then evolve to bellow solution
  import React, { useState } from 'react';

  export default function App() {
    // Declare a new state variable, which we'll call "count"
    const [name, setName] = useState("Joao Neves");
    const [age, setAge] = useState(38);

    return (
      <div>
        <p>{name}({age})</p>
        <button onClick={() => {
          setName("Juan Nieves");
          setAge(65);
        }}>
          Swap from PT and ES
        </button>
      </div>
    );
  }
```

### State With components & lifecycle

(https://reactjs.org/docs/state-and-lifecycle.html)

- componentDidMount
- componentWillUnmount
  [example] (https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

# Starting of the main Lab app - Movies app.

## Lists

### LAB (Movies app part 01) - Lists _\*CodeAlong ()_

#### Requirements:

```


- Add a component that list a collection of movies
- Movies object:
  - id
  - title
  - year
  - genre
  - director
  - actors
```

## Combine multiple Components ans its reusability

## Composing & Extracting Components

## Destructuring props & update state

### LAB (Movies app part 02) - components integration _\*HandsOn_ (15 min)
[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-04-solution)
#### Requirements:

```
Add pass list to a component named FilmList. Pass Film content to another component named FilmItem
```



### LAB (movies app part 03) - Challange - remove item _\*HandsOn_ (15 min)
[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-05-solution)|
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-06-solution)
#### Requirements:

```
- add a button on each FilmItem that remove the item from the list being displayed

```



## Effect hook: useEffect

- The Effect Hook lets you perform side effects in function components
  -side effects generalmente son cosas que se hacem em paralelo/ de forma assincrona e su execucion de su resultado impacta el estado do componente
- dependency list array

### LAB - Demo - useState & useEffect _\*CodeAlong_

Starting point: movie-app-part-03
Ending point: movie-app-part-04

```
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
    fetch("https://apimocha.com/moviesapi/film")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  return (
    <>
      <h1>Film List</h1>
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;

```

#### LAB - (movies app part 05) API challange _\*HandsOn_ (20 min)
starting point: movie-app-part-04
Ending point: movie-app-part-05
#### Requirements:

- loading while fetching
- Update Delete Button to remove from API
- delete endpoint: "https://apimocha.com/moviesapi/film/" + imdbID
- check signature of method fetch

```

Starting point: movie-app-part-04 Ending point: movie-app-part-05

import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteFilm = (imdbID) => {
    setIsLoading(true);
    fetch("https://apimocha.com/moviesapi/film/" + imdbID, {
      method: "DELETE",
    }).then((res) => {
      const newFilms = films.filter((film) => film.imdbID !== imdbID);
      setFilms(newFilms);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetch("https://apimocha.com/moviesapi/film")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Films List</h1>
      {isLoading && <p>...loading...</p>}
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;


```



#### LAB - (movies app part 06) API handling errors _\*codeAlong_

starting point: movie-app-part-05
Ending point: movie-app-part-06

#### Requirements:

- Handling errors
- Response errors
- Interact with state properties along response errors

```
import { React, useState, useEffect } from "react";
import "./style.css";
import FilmList from "./FilmList";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteFilm = (imdbID) => {
    setIsLoading(true);
    fetch("https://apimocha.com/moviesapi/film/" + imdbID, {
      method: "DELETE",
    }).then((res) => {
      const newFilms = films.filter((film) => film.imdbID !== imdbID);
      setFilms(newFilms);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetch("https://apimocha.com/moviesapi/film")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setFilms(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        //Connection error
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Films List</h1>
      {error && <p> {error}</p>}
      {isLoading && <p>...loading...</p>}
      {films && <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />}
    </>
  );
};

export default Home;

```

## custom Hooks
### useFetch
starting point: movie-app-part-06
Ending point: movie-app-part-07








Routing
useParams & Link
Styling components
Forms
Testing
Context API
Security
Redux
Tools, CI CD, Best practices, Debugging
