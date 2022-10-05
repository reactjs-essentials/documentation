

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

### App from create react app

```
  npx create-react-app my-app
  cd my-app
  npm start
  // add hello world component
```

### Intruducing [lab-00](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

### React basic concepts & conventions

## Class Component & Function Component

### LAB (15 min)

#### Requirements:

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-01-start) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-01-solution)

```
- 2 components named: [HelloClassComponent,HelloFunctionalComponent]
- HelloClassComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Class component"
- HelloFunctinalComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Functional component"
- Render both components in App Component
```

### Hooks

_simple JavaScript functions that we can use to isolate the reusable part from a functional component._

- Composition vs Inheritance [link] (https://reactjs.org/docs/composition-vs-inheritance.html)
- useState
- start example from [lab-00](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

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

### State With components & lifecycle ([Link](https://reactjs.org/docs/state-and-lifecycle.html))

- componentDidMount
- componentWillUnmount
- [Example](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

# Starting of the main Lab app - Movies app.

## Lists

### LAB (Movies app part 01) - Lists _\*CodeAlong ()_

// TODO: Paste starting point and ending point here

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
  - side effects generalmente son cosas que se hacem em paralelo/ de forma assincrona e su execucion de su resultado impacta el estado do componente
- dependency list array

### LAB - Demo - useState & useEffect _\*CodeAlong_

- _Starting point: movie-app-part-03_
- _Ending point: movie-app-part-04_

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

#### LAB - (movies app part 05) API challange - delete and loading features _\*HandsOn_ (20 min)

- _starting point: movie-app-part-04_
- _Ending point: movie-app-part-05_

#### Requirements:

- loading while fetching
- Update Delete Button to remove from API
- Implement Delete callind Delete endpoint
  - delete endpoint: "https://apimocha.com/moviesapi/film/" + imdbID
  - Hint: check signature of method fetch

```

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
  })
  .then((res) => {
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

\_\_

- _Starting point: movie-app-part-05_
- _Ending point: movie-app-part-06_

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
  })
  .then((res) => {
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

_Starting point: movie-app-part-06_
_Ending point: movie-app-part-07_

## Routing useParams & Link

## Styling React components [link](https://css-tricks.com/different-ways-to-write-css-in-react/)

### CSS Stylesheets

- You can create a new CSS file in your project directory and add your CSS inside it. You can then import it in your component, class or React JS page.

### Inline Styles

- Probably the most common and quickest out of all 3 is inline CSS. However it has many disadvantages and it is generally discouraged to use unless it is a very small application. Basically, we create an object that contains different references which are then called using the style{} attribute

### Styted Components

- Styled Components lets you write actual CSS in your JavaScript. The main advantage is that you can add conditional code and use variables and functions within the CSS!. You can install Styled Components using the following command:
- npm install --save styled-components
  - Next, you need to import it in you component. Then you can create a new variable that will contain the CSS. The same variable name with open and close brackets will render or create an HTML element with the previously added styles on it.

### CSS Modules

- Can also add scoped styles quite easily, you just need to create a file with the extension .module.css
- During the build step a new class was generated dynamically with a unique identifier.
- CSS Modules tries to solve a problem that you might encounter when working on medium to large projects and that is global scoping in CSS.

## Forms in react [link](https://reactjs.org/docs/forms.html)

### LAB First Form _\*codeAlong_

_Starting point: movie-app-part-09_
_Ending point: movie-app-part-11_

- controlled & uncontroled forms
  - HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
  - Controlled compenents rely on usestate to control state for each input elements
  - uncontrolled components rely on DOM state to manage the values
  - controlled is the reccomended way: instand message feedback / disable enable, format text
- setting up the value attribute from input prevent user from changing the input. in becomes an controlled and only possible to change via callback
- controlled is the reccomended way: instand message feedback / disable enable, format text

#### Requirements

- Create new film form in route "/new"
- submit form and navigate to home page after creation
  - const handleSubmit = (e) => {}
  
- Film object to Post = {
  imdbID: "",
  title: "",
  year: "",
  gender: "",
  director: "",
  actors: "",
  }

### LAB Forms custom inputs

_Starting point: movie-app-part-11_
_Ending point: movie-app-part-12_

- create custom select for gender
  - fetch All genders using useFetch
  - Turn gender and actors array values
  - All genders endpoint url= "https://apimocha.com/moviesapi/gender"
- create a input for actors based on react-select library
  - npm i react-select for actors

### LAB: Using with Formik library Refactor to use Formik [link](https://formik.org/docs/overview)

_Starting point: movie-app-part-12_
_Ending point: movie-app-part-13_

- Formik Basics
  - initial Values
  - on submit, (values, actions)
  - render form through render function (function that return some JSX) {(props)=>(<>render fn</>)}

### LAB: Using with Formik Field for and data validation

- Field, Form, ErrorMessage
- data-validation
  - validate : Form level & field level
  - schema
    - npm install yup --save

### Part 15: Rect tests

## Testing

## Context API

## Security

## Redux

## Tools, CI CD, Best practices, Debugging

```

```
