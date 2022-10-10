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

### Class Component & Function Component

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

### State With components & lifecycle [link](https://reactjs.org/docs/state-and-lifecycle.html)

- [example](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

# Starting of the main Lab app - Movies app.

## Lists, Destructuring props, Composing & Extracting Components

### LAB (Movies app part 01) - Lists _\*CodeAlong_

_Starting point: movie-app-part-01_
_Ending point: movie-app-part-02_

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

_Starting point: movie-app-part-01_
_Ending point: movie-app-part-02_

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

_Starting point: movie-app-part-02_
_Ending point: movie-app-part-03_

#### Requirements:

```
- add a button on each FilmItem that remove the item from the list being displayed

```

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-05-solution)|
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-06-solution)

## Effect hook: useEffect [link](https://reactjs.org/docs/hooks-effect.html)

### LAB - Demo - useState & useEffect _\*CodeAlong_

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
- create a hook that with a single url be able to:
    - Fetch the data
    - Retrieve it
    - Control the loading indicator for the fetching process
    - Handling Errors

```

...

## Routing, useParams, useNavigate & Link

*React Router* is a standard library for routing in React.

[React-Router](https://reactrouter.com/en/main)

TO TALK ABOUT:

- install package react-router-dom
- Router & Switch components
- Route match
- Link Component

Related hooks:

- useParams()

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

- useNavigate()
    
The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect.
    
### LAB (Movies app part 07 to Movies app part 09) - Routing + useParams _\*CodeAlong_

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-07-solution) |
[Middle point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-08-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-09-solution)
    
  Requirements Middle Point:
- Add BrowserRouter in index.js
- Define Routes in App.js
    
  Requirements Ending Point:
- Create details page
- Navigate to URL with params

## [Styling components](https://css-tricks.com/different-ways-to-write-css-in-react/)
   
### CSS Stylesheets
- You can create a new CSS file in your project directory and add your CSS inside it. You can then import it in your component, class or React JS page.
   
### Inline Styles
- Probably the most common and quickest out of all 3 is inline CSS. However it has many disadvantages and it is generally discouraged to use unless it is a very small    application. Basically, we create an object that contains different references which are then called using the style{} attribute
   
### Styted Components
- Styled Components lets you write actual CSS in your JavaScript. The main advantage is that you can add conditional code and use variables and functions within the      CSS!. You can install Styled Components using the following command:
- npm install --save styled-components
  -  Next, you need to import it in you component. Then you can create a new variable that will contain the CSS. The same variable name with open and close brackets will    render or create an HTML element with the previously added styles on it.
   
### CSS Modules
   - Can also add scoped styles quite easily, you just need to create a file with the extension .module.css
   - During the build step a new class was generated dynamically with a unique identifier.
   - CSS Modules tries to solve a problem that you might encounter when working on medium to large projects and that is global scoping in CSS.
    
 ### LAB (Movies app part 10) - Styling  _\*CodeAlong_

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-09-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-10-solution)
    
  Requirements 
- Add Navbar.css -> CSS Stylesheets
- Use Inline Styles in FilmItem.js
- Add FilmDetails.module.css -> CSS Modules
- Use Styled Components in FilmList.js

## [Forms in react](https://reactjs.org/docs/forms.html)

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

## Testing (https://reactjs.org/docs/testing.html)

Recommended Tools: Jest & React Testing Library
    
- **Jest** is a JavaScript test runner that lets you access the DOM via jsdom. While jsdom is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a great iteration speed combined with powerful features like mocking modules and timers so you can have more control over how the code executes.

- **React Testing Library** is a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. Although it doesn’t provide a way to “shallowly” render a component without its children, a test runner like Jest lets you do this by mocking.
    
### LAB: Testing (Movies app part 15) 
    
[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-14-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-15-solution)
    
_Starting point: movie-app-part-14_
_Ending point: movie-app-part-15_
    
Requirements:
    
- App.test.js
       1. Check component rendering after navigation to form (using click and timeout). Using getByText method.
- FilmItem.test.js
       2. Check component rendering using mock for props. Using getByText method.
- Navbar.test.js : 
       3. Testing using getByRole from React Testing Library


## [Context API](https://reactjs.org/docs/context.html)

### What is React context?
- React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
    
### When should you use React context?
- React context is great when you are passing data that can be used in any component in your application.

### These types of data include:

- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)
    
- Data should be placed on React context that does not need to be updated often.
Why? Because context was not made as an entire state management system. It was made to make consuming data easier.
    
### What problems does React context solve?
    
*React context helps us avoid the problem of props drilling.*
- Props drilling is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.
    
### LAB: Context API (Movies app part 16) 
    
[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-15-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-16-solution)
    
_Starting point: movie-app-part-15_
_Ending point: movie-app-part-16_
    
Requirements:
    
- Create ThemeContext : dark - light (updated in Navbar.js)
    
## Security

Key Usecases:

- Authentication
- Authorization
- Protected Routes based on Authentication/Authorization
- Common used aproach to tackle Security requirements (api Context, Routing Guards, Authorization token header)

### LAB: Implement security into our App - a round up of all techniques learned so far! _*CodeAlong_

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

## [Redux]([https://reactjs.org/docs/context.html](https://react-redux.js.org/introduction/getting-started)

To use React Redux with your React app, install it as a dependency:
    *If you use npm:*
- npm install react-redux


## What is Redux?
    
Redux is a package that creates a global state which you can share between React components—no parent / child relationship required.
Main parts :
- Stores
- Reducers
- Actions
 
### 1. Redux Store
    
- Redux places all of your components' state in one central location. This makes it accessible to all components without requiring a parent / child relationship. The central location in which we store the state is called a store.
    
- **This API includes the following:**

- getState for accessing the current state of the application
- dispatch for changing state via an action
- subscribe for responding to state changes
    
### 2. Redux Reducers
    
A reducer is just a function that takes two arguments and returns your app's current state. The two arguments it takes are:

- Your current state (JavaScript object)
- An action (also a JavaScript object)
    
### 3. Redux Actions
    
Redux actions are JavaScript objects that contain two properties: type and payload. These actions are "dispatched," or used as arguments by the Redux store's dispatch API method.
    
### LAB: Redux (Movies app part 17) 
    
[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-16-solution) |
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-17-solution)
    
_Starting point: movie-app-part-16_
_Ending point: movie-app-part-17_

Create a new screen where we are going to have a watchlist that shows the selected movies on the home page

Requirements:
    
- Create new file WatchList.js (displays movies from Redux state)
- Add button WatchList in FilmList component that uses dispatch function from Redux.
- Create watchlistReducer with 2 actions : DELETE_FILM and ADD_FILM

## Tools

- [React dev tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - Components
  - Profiler
- [ReduRedux DevToolsx](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - Time travel debugging
