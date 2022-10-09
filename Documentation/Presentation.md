# Agenda

    - Javascript basics
    - Why React
    - React basics
      - First react App
      - Class Component & Function Component
      - Hooks
      - useState & event handling
      - State With components & lifecycle
      - Lists,  Destructuring props, Composing & Extracting Components
      - useEffect
      - fetching Data
      - custom Hooks
      - Routing
      - useParams useNavigate & Link
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

  ## React basics

  _Goal of this section, get familiar with dev environment, hands on first app developments, basic react concepts_

  ### First react App

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

- Composition vs Inheritance [link](https://reactjs.org/docs/composition-vs-inheritance.html)

### useState & event handling [link](https://reactjs.org/docs/hooks-state.html)

TODO: [lab-00](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

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

[link](https://reactjs.org/docs/state-and-lifecycle.html)
[example] (https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

# Starting of the main Lab app - Movies app.

## Lists, Destructuring props, Composing & Extracting Components

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

_TO TALK ABOUT:_

- key tag is for react to keep track on the DOM as its output, must be unique in items list

### LAB (Movies app part 02) - components integration _\*HandsOn_ (15 min)

#### Requirements:

```
Add pass list to a component named FilmList. Pass Film content to another component named FilmItem
```

_TO TALKABOUT:_

- mention the way to extract directly const from the props.
- "big three" list operations: map, filter, and reduce.
- pass function and not the return "function()"
- React developer tools add plugin and showcase
- talk about component tree

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-04-solution)

### LAB (movies app part 03) - Challange - remove item _\*HandsOn_ (15 min)

#### Requirements:

```
- add a button on each FilmItem that remove the item from the list being displayed

```

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-05-solution)|
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-06-solution)

## Effect hook: useEffect [link](https://reactjs.org/docs/hooks-effect.html)

### LAB - Demo - useState & useEffect _\*CodeAlong_

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

_TO TALKABOUT:_

- callback function parameter
- Dependency array parameter
- note:
  - Don’t call Hooks inside loops, conditions, or nested functions.
  - Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.
  - The state of each component is completely independent. Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state

## Server Render - REST service API [link](https://apimocha.com)

### Available mocked endpoints:

- GET - https://apimocha.com/moviesapi/film/
- GET - https://apimocha.com/moviesapi/film/:imdbID
- POST - https://apimocha.com/moviesapi/film/:imdbID
- DELETE - https://apimocha.com/moviesapi/film/:imdbID
- POST - https://apimocha.com/authentication/login

LAB - (movies app part 04) API communication _\*codeAlong_

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-06-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-08-solution)
_TO TALK ABOUT:_

- talk about api mocha - https://apimocha.com/lab-films/films
- Explain how React execute REST API Calls
- Fetch data
- Conditional render filmList if films are still not fetched

#### LAB - (movies app part 05) API challange _\*HandsOn_ (20 min)

#### Requirements:

```
- loading while fetching
- Update Delete Button to remove from API

```

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-08-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-09-solution)

#### LAB - (movies app part 06) API handling errors _\*codeAlong_

#### Requirements:

```
- Handling errors
- Response errors
- Interact with state properties along response errors
```

## custom Hooks [link](https://reactjs.org/docs/hooks-custom.html)

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook.

### LAB - Demo - custom Hooks _\*CodeAlong_

#### Requirements:

```
- custom hook useFetch

```

...

## Routing, useParams, useNavigate & Link

//TODO:Miguel

## Styling components

//TODO:Miguel

## Forms in react [link](https://reactjs.org/docs/forms.html)

### LAB - First Form _\*codeAlong_

_Starting point: movie-app-part-09_
_Ending point: movie-app-part-11_

Keynotes:

- controlled & uncontroled forms
- setting up the value attribute from input prevent user from changing the input. in becomes an controlled and only possible to change via callback
- controlled is the reccomended way: instand message feedback / disable enable, format text

#### Requirements

```
- Create new film form in route "/new"
- submit form and navigate to home page after creation
  - const handleSubmit = (e) => {}
  - POST fetch: https://apimocha.com/moviesapi/film/:imdbID with body
- Film object to Post = {
  imdbID: "",
  title: "",
  year: "",
  gender: "",
  director: "",
  actors: "",
  }
```

### LAB Forms custom inputs

_Starting point: movie-app-part-11_
_Ending point: movie-app-part-12_

#### Requirements

```
- create custom select for gender
  - fetch All genders using useFetch
  - Turn gender and actors array values for multi select
  - All genders endpoint url= "https://apimocha.com/moviesapi/gender"
- create a input for actors based on react-select library
  - npm i react-select for actors
```

### LAB: Using with Formik library Refactor to use Formik [link](https://formik.org/docs/overview)

_Starting point: movie-app-part-12_
_Ending point: movie-app-part-13_

Keynotes / Formik Basics:

- initial Values set initial values and values that will be managed
- on submit, (values, actions)
- render form through render function (function that return some JSX) {(props)=>(<>render fn</>)}
- formik props : formic props and functions for handlig scenarios for each formfils
  - https://formik.org/docs/api/formik

### LAB: Using with Formik Field for and data validation

_Starting point: movie-app-part-13_
_Ending point: movie-app-part-14_

- Field, Form, ErrorMessage
- data-validation
  - validate : Form level & field level
  - schema
    - npm install yup --save

## Testing

//TODO:Miguel

## Context API

## Security

Key Usecases:

- Authentication
- Authorization
- Protected Routes based on Authentication/Authorization
- Common used aproach to tackle Security requirements (api Context, Routing Guards, Authorization token header)

### Lab: Implement security into our up - a round up of all techniques learned so far

- [Protected routes implementation example](https://www.robinwieruch.de/react-router-private-routes/)
- [Authentication example](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications)
  _Starting point: movie-app-part-17_
  _Ending point: movie-app-part-18_

#### Requirements

```
- Create a button that trigget a POST - https://apimocha.com/authentication/login"
- Store login props in a provider to be accessible to children components
- Create a button logout that reset login props
- Playlist link should only be visible for authenticated users
- Playlist Route should be protected and only be accessible to authenticated users
- Delete Film post should be called with a Bearer Token provided by logged in data
```

## Redux

//TODO:Miguel

## Tools

-[React dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- Components
- profiler
- [ReduRedux DevToolsx](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - Time travel debugging
