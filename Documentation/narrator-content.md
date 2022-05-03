# REACTJS TRAINING COURSE

## Javascript basics

### Introduction to Scope (function scope, block scope) - [Link](https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11)

### Arrow Functions - [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) [Link](https://www.javascripttutorial.net/es6/javascript-arrow-function/)

There are many ways to define a function in JavaScript, and the modern specification introduced a new way, arrow functions. It is a way to define a function without typing the keyword function, but rather by using an arrow symbol like this. This shorter syntax is preferable not only because it's shorter, but also because it behaves more predictably with closures. Let me tell you about that. An arrow function does not care who calls it, while a regular function cares very much about that.
A regular function, always binds the value for its this keyword for its caller. If it didn't have an explicit caller, the value of the this keyword will be determined by the calling environment. An arrow function, on the other hand, not caring about who called it, will close over the value of the this keyword for its scope at the time it was defined. An arrow function will close over the value of the this keyword for its scope at the time it was defined. This makes it great for delayed execution cases like events and listeners because it gives easy access to the defining environment, not the calling environment. One other cool thing about arrow functions is that if the function only has a single line that returns something, you can make it even more concise by removing the curly braces and the return keyword altogether. You can also remove the parentheses around the argument if the function receives a single argument, making it really short. This syntax is usually popular for functions that get passed to array methods, like map, reduce, and filter, and functional programming in general.

### Object Literals - [Link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

A very common way you create a JavaScript object is to use an object literal. This is a lot easier than doing something like new object. Literal initiation can be use it for objects, arrays, strings, numbers, and even things like regular expressions. The object literal syntax supports a few modern goodies. If you need to define a property that holds a function, you can use this short syntax with object liberals. Of course, if you need an arrow function, you can still use this regular property syntax. Modern object literals also support dynamic properties using this syntax. It looks like an array literal, but don't confuse it with that. JavaScript will evaluate what's within the square brackets and make the result of that the new property name. So, assuming we have a variable named mystery defined before this X object, here's a JavaScript interview question. What is the value of obj.mystery? It's undefined because this mystery property was defined with a dynamic property syntax. This means JavaScript will evaluate the mystery expression first, and whatever that expression evaluates to will become the object's property.

Funny question: guess. answer: undefined - dynamic property syntax

```
const guessMe = 'answer';
const obj = {
   p1:10,
   p2:20,
   f1(){},
   f2:() => {},
   [guessMe]:42
}

console.log(obj.guessMe);
```

### Destructuring [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Rest/Spread [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Template Strings

You can define strings in JavaScript using either single quotes or double quotes. These two ways to define string literals in JavaScript are equivalent. Modern JavaScript has a third way to define strings, and that's using the backtick character. Strings defined with the backtick character are called template strings because they can be used as a template with dynamic values. They support what we call interpolation. You can inject any dynamic expression in JavaScript within these dollar sign curly braces holders.

```
const name = 'JUAN';
const templateString = `my name is ${name}`

console.log(templateString);
```

### Classes

JavaScript offers many programming paradigms, and object‑oriented programming is one of them. Everything in JavaScript is an object, including functions. Modern JavaScript also added support for the class syntax. A class is a template or blueprint for you to define shared structure and behavior between similar objects. You can define new classes, make them extend other classes, and instantiate objects out of them using the new keyword, You can customize the construction of every object and define shared functions between these objects. Here's a standard class example that demonstrate all these features. We have a Person class and a Student class that extends the Person class. Every student is also a person. Both classes define a constructor function. The constructor function is a special one that gets called every time we instantiate an object out of the class, which we do using the new keyword. We are instantiating one object from the Person class and two other objects from the Student class. The arguments we pass here when we instantiate these objects are accessible in the constructor function of the class. The Person class expects a name argument, and it stores that value on the instance using the this keyword here. The Student class expects a name argument and the level argument. It stores the level value on its instance, and since it extends the Person class, it will call the super method with the name argument, which will invoke the Person class constructor function and store the name as well. Both classes defined a greet function that uses the values they store on each instance. In the third object, which we instantiated from the Student class here, I also defined a greet function directly on the object. When we test this script, o1 will ease the greet method from its class, the Person class, o2 will use the great method from the Student class, and o3 will use its own directly defined greet method.

```
class Person {
 constructor(name) {
   this.name = name;
 }
 greet() {
   console.log(`Hello ${this.name}!`);
 }
}

class Student extends Person {
 constructor(name, level) {
   super(name);
   this.level = level;
 }
 greet() {
   console.log(`Hello ${this.name} from ${this.level}`);
 }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');

o1.greet();
o2.greet();
o3.greet();
```

### Promises and Async/Await

When you need to work with asynchronous operations, usually have to deal with promise objects. A promise is an object that might deliver data at a later point in the program. An example of an async function that returns a promise is the web fetch API that's natively available in some browsers. Here we're fetching information from the top‑level GitHub API. Since fetch returns a promise, to consume that promise, we do at .then call on the result of fetch and supply a callback function in here. This callback function will receive the data from the API. The fetch API has a raw response. If you need to parse the data as JSON, you need to call the json method on the response object, and that json method is also on asynchronous one, so it returns a promise as well. To get the data, we need another .then call on the result of the json method, and in the callback of that, we can access the data. As you can see, this syntax might get complicated with more nesting of asynchronous operations or when we need to combine this with any looping logic. You can simplify the nesting here by making each promise callback return the promise object, but the whole .then syntax is a bit less readable than the modern way to consume promises in JavaScript, which is using async await. Let me show you that. You just await on the asynchronous call that returns a promise, and that will give you back the response object. Then you can await on the json method to access the JSON data, just like this. And to make these await calls, you need to label the function as async, and this will work exactly the same. The async await syntax is just a way for us to consume promises without having to nest .then calls. It's a bit simpler to read, but keep in mind that once you await on anything in a function like fetchData here, this function itself becomes asynchronous, and it will return a promise object.

## React - The theory

### History

    Facebook created React in 2011 for their own use on facebook.com, one of the highest trafficked websites in the world. React was then utilized by Instagram a year later in 2012. After already using React internally for two years, Facebook open sourced React in 2013. Some initially dismissed it because React ran contrary to popular practices by placing markup and logic together in a single file. But as more people experimented with the library, many embraced the new component‑centric philosophy for separating concerns. Each React component is a separate concern. A year later, in 2014, React had grown significantly in popularity and was embraced by many notable companies outside of Facebook. Today, there are over 50,000 React components in production at Facebook. Facebook is deeply committed to React since it also uses React on Instagram and React Native for mobile development. Today, Facebook employs a full‑time React development staff that regularly releases bug fixes, enhancements, blog posts, and documentation. And as you'll see soon, many large, well‑respected Fortune 500 companies utilize React in production too.

### Basics

    React has three simple and fundamental concepts. The first concept is its components. With React, we describe user interfaces using components. Simple React components are actually just vanilla JavaScript functions. In any programming language, we invoke functions with some input, and they give us some output in return. We can reuse functions as needed and compose bigger functions from smaller ones. React components are exactly the same. They receive certain input objects, and they output a description of a user interface. We can reuse a single component in multiple user interfaces, and components can contain other components. However, you don't really invoke a React component. You just use it in your HTML as if it was just a regular HTML element. Unlike pure functions, a React component can have a private state to hold any data that may change over the lifecycle of the component Init's nature the reactive updates concept. React's name is a simple explanation for this concept. When the state of a React component, the input, changes, the user interface it represents, the output, changes as well. This change in the description of the user interface has to be reflected in the device we are working with. In a browser, we need to regenerate the HTML views in the DOM tree. With React, we don't need to worry about how to reflect these changes or even manage when to take changes to the browser. React will simply react to the changes in a component's state and automatically update the parts of the DOM that need to be updated. The third concept about React is its virtual representation of views in memory. To build HTML web applications with React, we don't write HTML at all. We use JavaScript to generate HTML. When your web application receives just the data from the server in the background with AJAX, you need something more than HTML to work with that data, and you have two options. You can use an enhanced HTML template that has loops and conditionals, or you can rely on the power of JavaScript itself to generate the HTML from the data. Both approaches have advantages and disadvantages. React embraces the latter one and eliminates the extra step needed to parse and enhance the HTML template. One big advantage for this HTML in JavaScript approach is how it enables React to keep and use a virtual representation of HTML views in memory, which is commonly known as the virtual DOM, or the tree reconciliation algorithm. React uses the virtual DOM to compare versions of the UI in memory before it acts on them. I'll show you the practical value of that once we're comfortable with the basic syntax of React. A React component can be one of two types. It can be either a function component or a class component. Both types can be stateful and have side effects, or they can be purely presentational. Both types can be compared to regular functions when it comes to their contract. They use a set of props and state as their input, and they output what looks like HTML, but is really a special JavaScript syntax called JSX. The props input is an explicit one. It is similar to the list of attributes an HTML element can have. The state input is an internal one, but is really the more interesting one because of how React uses it to auto‑reflect changes in the browser. These two input objects have one important difference. Within a component, the state object can be changed while the props object represents fixed values. Props are immutable. Components can only change their internal state, not their properties. This is a core idea to understand in React. ´´´example´´´

### Why React?

#### Flexibility

    Can build user interfaces for a huge variety of platforms and use cases. React is remarkably flexible. React embeds fewer opinions than it's competition, so it's more flexible than opinionated frameworks like Angular and Ember. React is a library, not a framework. And as you're about to see, React's library approach has allowed it to evolve into a remarkably flexible tool. When React was initially created, it had a single, focused use case. It was for creating components for web applications. However, as React has grown in popularity, its ecosystem has grown to cover a variety of use cases. You can generate static sites with React using popular tools like Gatsby and Phenomic. You can use React to build truly native mobile applications using React Native. And with great tools like Electron, you can even create installable desktop apps that run on Mac and Windows using web technologies like React. React also supports server rendering out of the box, and popular frameworks like Next.js make it really easy to set up. In summary, learn React once, and you can write applications just about everywhere. React is highly versatile because the renderer is separate from React itself. For web apps, you call react‑dom to render your components to HTML. For React Native, you use react‑native to render React components into native‑friendly code. Since React is a lightweight library, you can use it with existing apps too, even server‑side rendered apps. In fact, that's precisely what React was designed for. Facebook used React to slowly replace its server‑side rendered PHP application. You can start with small portions of the page like this, then move on to slightly larger portions of the page, and eventually rebuild the entire page by slowly replacing larger sections with React. It's a low‑risk way to migrate an existing app to React or to use React in places where it's most valuable. Finally, since React is used heavily by Facebook, you can trust that it will continue to run reliably in all popular browsers, including recent versions of Internet Explorer. Of course, Facebook can't afford to have its website only run on some browsers.

#### Developer Experience

    Once your team tries React, they'll likely fall in love. The rapid feedback development experience combined with React's small, logical API creates a development experience that's very hard to beat. React is special because it offers a simple API that's easy to learn. There are very few concepts to master. React's API is so small and straightforward that developers rarely need to check the docs. It's basically a function that returns what looks like HTML. React just handles HTML with JavaScript. React encourages you to get better at JavaScript, and in doing so, you also get better at React.

#### Corporate Investment

    Many well‑respected corporations are deeply invested in React and its ecosystem today. React was created by Facebook, so of course React is heavily used on Facebook, one of the highest trafficked apps in the world, as well as Facebook's other properties, such as Instagram and WhatsApp. Facebook is deeply committed to React.

#### Community

    Huge active community. Since 2013, React's popularity has steadily grown to over 140,000 stars today. This makes React one of the most popular repositories on GitHub. Today, React has over 1000 contributors. Only two repos have more stars on GitHub than React. React npm package is downloaded over 6 million times every single week. Today, many of the world's most respected companies use React, including Apple, Netflix, Amazon, Airbnb, PayPal, and many more. Microsoft open sourced a large React component library for making user interfaces that have a look and feel like Office. It's called Fabric. Material‑UI offers a set of React components that implement Google's Material Design guidelines. React Bootstrap is a popular library that contains React components that make it easy to work with Bootstrap. And there are literally hundreds of interesting, standalone React components out there on GitHub that you might find useful. Check out the awesome‑react list on GitHub for a long list of additional components. Deep community investment has led to a wide variety of mature, related projects. Do you need routing? Well, check out React Router. Do you want to handle complex data flows using a library? Well, Redux and MobX are two popular options to consider today. Do you want to set up automated testing? We'll check out Jest, which is also from Facebook. Want an alternative to RESTful API calls where you can declare your API calls on the client? Try out GraphQL. Want to quickly set up a server‑side rendered site in React with Node? Then try Next.js. Of course, this just scratches the surface of the ecosystem. This list could go on and on. So, uh, I guess you could say that React is kind of a big deal right now.
    - library vs framework

#### Testability

    Typically, testing a front end is hard, that's why so few teams do comprehensive front end testing, but React is attractive and noteworthy because its design is very friendly to automated testing. With React, the vast majority of your components can be plain pure functions. A pure function always returns the same output for a given input, it has no side effects. React's functional component style makes it trivial to test your component since it's pure. For example, if I set the message prop to world for this component, it will always output a div that contains the text, Hello World. It's reliable, deterministic, and it has no side effects. It relies upon no global state, and while this is a simple example, this design can scale the highly complex user interfaces. There is a wide variety of JavaScript testing frameworks available, and since React is just javascript, any one of these will work just great. But for React, the most popular choice today is Jest. Jest was created by Facebook and Jest makes it trivial to get started doing automated testing in React. Jest is built in to create React app. Every time you hit Save, it automatically runs any affected tests. This instant feedback can rapidly speed development.

### Framework vs. Library

    Competitors like Angular and Ember are frameworks. React, in contrast, is generally considered a library since it's lean and focused on components. Now a framework isn't fundamentally better than a library. It's a tradeoff. A framework contains more opinions, so you can avoid spending time trying to choose between many options. This reduces decision fatigue, and there's often less setup overhead. Frameworks can help enforce consistency since most frameworks are more opinionated. However, React's Library approach also has some clear advantages. At only around 35K Gzipped, React is significantly smaller than most frameworks. This means that it's small enough that you can sprinkle it on existing applications so that you can slowly migrate an existing app to React, even a server‑side rendered app. React doesn't force many decisions on you. It allows you to only pull in the features that you need to keep your app lean and fast. You're free to pick the precise technologies that you need for your project, and you're free to select the best technology for your use case as well. Decision fatigue is also largely a solved problem with React because opinionated boiler plates, like create‑react‑app, effectively turn React into an optional framework. Now since React is a focused component library, more comprehensive frameworks like Angular come bundled with more features, including testing, a library for HTTP calls, routing, and internationalization all built in. In contrast with React, you select the pieces that apply to your use case and you add them in. Since React is very popular, there's almost certainly a mature library that does what you need.

### Template-centric vs. JavaScript-centric

    Angular, Vue, and Ember seek to make HTML more powerful by inventing their own unique syntax for writing code in HTML. React takes the exact opposite approach and instead utilizes the power of JavaScript to handle HTML. With React, It's preferable because the syntax is plain JavaScript. React has very little unique syntax to learn. And since React embraces JavaScript, you don't have to learn a new vocabulary to describe the new features that other template‑centric libraries like Angular add to HTML. Most of what you write in React is really just plain JavaScript. This leads to less typing and less code, which I find produces a result that's easier to read and debug. Finally, React's JavaScript‑centric approach encourages improving your JavaScript skills.

### Separate vs. Single File

    Patterns like MVC popularized separating the model, view, and controller into three separate files. Traditionally, for web apps, this means that the view is HTML. The model declares the data for the view in JavaScript, and the controller controls the interactions with the model. In contrast, with React, each component is an autonomous concern. Each component stands on its own and can be composed with other components to build rich, complex UIs. This means markup and logic are colocated in the same file. When React was introduced in 2013, people were very skeptical, and for good reason. React's design ran against the current best practice of placing HTML templates and JavaScript logic in separate files. In React, each component contains both logic and markup in the same file, so on the surface, this feels like it violates the principle of separation of concerns. However, in React, you think about separation of concerns differently. Traditional separation of concerns often fixates on placing each technology in a separate file. So in web development, this means placing HTML, CSS, and JS in separate files. But React recognizes that while these are indeed separate technologies, they must be carefully composed together to do anything useful. So in React, each component is a separate concern. React's component approach lends itself well to building complex Uis by breaking your page down into small, autonomous pieces that you can reason about and test in isolation.

## React Getting Started

Goal of this section, get familiar with dev environment, hands on first app developments, basic react concepts

### First react app

```
  npm init -y
  npm install react react-dom next
  // add hello world component
```

intruducing [lab-00] (https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

### App from create react app

```
  npx create-react-app my-app
  cd my-app
  npm start
  // add hello world component
```

- node modules
- src
- index.html
- index.js
- package.json
- scripts inside package.json

### React basic concepts & conventions

- component Declaration Always in Pascal case <Compenent>
- generation of html using js - JSX [link](https://reactjs.org/docs/introducing-jsx.html)

```
  // a)
  class Hello extends React.Component {
    render () {
      return (
        <div className="container">
        <h1>React Essencials</h1>
        </div>
      );
    }
  }
  ReactDOM.render(<Hello />, ...)

  // b)
  class Hello extends React.Component {
    render () {
      return (
        React.createElement("div", { className: "container"},
        React.createElement("h1", null, "React Essencials")
      );
    }
  }
  ReactDOM.render(React.createElement(Hello, null),...)
```

- declaring variables in JSX - {...}
- event handling [link](https://reactjs.org/docs/handling-events.html)
- ReactDom.render declaration
- props & state
- <Compenent> declaration
- Basic examples Functions / Class components
- className stands for class in html
- Conditional Rendering [link] (https://reactjs.org/docs/conditional-rendering.html)

      ```
      // Function component
      const FunctionComponent = (props) => {
        return <h1>Hello {props.username}</h1>;
      ```

      ```
      // Class component
      class ClassComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render () {
          return (
            h1>Hello {this.props.username}</h1>;
          );
        }
      }
      ```

- Composition vs Inheritance [link] (https://reactjs.org/docs/composition-vs-inheritance.html)
- React Updating the browser / Tree reconsiliation - Tree reconsiliation (example xxx)
  If you try to type something in the text box of the HTML version, you will not be able to. This is very much expected because we are basically throwing away the whole DOM node on every tick and regenerating it. However, if you try to type something in the text box that is rendered with React, you can certainly do that. Although the whole React rendering code is within our ticking timer, React is changing only the timestamp text and not the whole DOM node. This is why the text input was not regenerated and we were able to type in it. You can see the different ways we are updating the DOM visually if you inspect the two DOM nodes in the Chrome DevTools elements panel. The Chrome DevTools highlight any DOM elements that get updated. You will see how we are regenerating the entire first mountNode element with every tick, while React is smartly only regenerating the content of the pre element in the second mountNode. This is React's smart diffing algorithm in action. It only regenerates in its DOM node what actually needs to be regenerated, while it keeps everything else the same. This diffing process is possible because of React's virtual DOM and the fact that we have a representation of our user interface in memory because we wrote it in JavaScript. For every tick in this example, React keeps the last UI version in memory, and when it has a new one to take to the browser, that new UI version will also be in memory. So React can compute the difference between the new and the old versions. In this example, the difference was the content of the pre element. React will then instruct the browser to update only the computed diff and not the whole DOM node. No matter how many times we regenerate our interface, React will take to the browser only the new partial updates. The React way is not only a lot more efficient, but it also removes a big layer of complexity about the way we think about updating user interfaces. Having React do all the computations about whether we should or should not update the DOM enables us to focus on thinking about our data and state and the way to model that state.

### Function component vs class components

#### LAB01 - Class Component & function component

##### Requirements:

- 2 components named: [HelloClassComponent,HelloFunctionalComponent]
- HelloClassComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Class component"
- HelloFunctinalComponent output should be "hello, I am a {typeComponent}" where typeComponent==="Functional component"

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-01-solution)

- public code
- the need for import React from "react"; to all react components
- the need of reference another react components to use
- explain this.props
- explain render
- the state of class components

- difference between function & class components
  - (Function) is just a plain JavaScript function that accepts props as an argument and returns a React element. (Class) requires you to extend from React. Component and create a render function which returns a React element.
  - (Function) There is no render method used in functional components. (Class) It must have the render() method returning JSX (which is syntactically similar to HTML)
  - (Function) Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. (Class) Also known as Stateful components because they implement logic and state.
  - React lifecycle methods cannot be used in function components while class components can.
  - (Function) Hooks can be easily used in functional components to make them Stateful. (Class) It requires different syntax inside a class component to implement hooks.
- Why use Function components instead

  - same performance but less code and arguablby cleaner aproach
  - with use of hooks you can archive all functionality class offer in a functional aproach.
  - Currently the development community favour the use of functional components and the use of hooks to manage the component state. so thats the aproach we will favour for now on.

- Quick mention to teach that JSX only interpolates strings , convert automatically numbers into strings, arrays into strings (values sequences) and simple javascript evaluations. Objects will lead to error
- click event paramtereless and with parameter

### State

#### State hook: useState (built-in)

In a nutchel, hooks allows you to use state and other React features without writing a class.
State in component context is basically the data we use in that point in time on that component
by default a property is not reactive, wich means react will not update a component each time any prop gets updated. one way to turn prop reactive is atatch it to the react state by using the hook useState.
All links start with prefix use be convention
useState provide you a way to make a reactive value and provide you a way to change it anytime you want
invoque the function useState and accepts an parameter for its initial value. this initial value will only be used once. usestate will return 2 values, so we store them as variables, most commonly usincg destructing js method. first returned value is the value itself ex: name, second is the function that change it. by convention is set prefix plus the prop value.

- You can use the State Hook more than once in a single component:
  - const [age, setAge] = useState(42);
  - const [fruit, setFruit] = useState('banana');

### events

- how react atatch a function to a event
- wrap a function with parameters in a annonymous function
- automatic event object

```
  // Function component with state hook
  // start with normal const to demonstrate non reactive variables, then evolve to bellow solution
  import React, { useState } from 'react';

  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [name, setName] = useState(Joao Neves);
    const [age, setage] = useState(37);

    return (
      <div>
        <p>ToSpanish</p>
        <button onClick={() => {
          setName("Juan Nieves");
          setAge(65);
        }}>
          Click me
        </button>
      </div>
    );
```

#### LAB02 - State & events

##### Requirements:

- implement a counter display.
- the counter will start as 0 and increment by 1 each time a user click a button

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-02-solution)

- To Remember:
  - Calling useState will declare a “state variable”. Our variable is called count.
  - useState returns a pair: the current state value and a function that lets you update it.
  - The only argument to useState is the initial state.
  - The initial state argument is only used during the first render.
  - We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.
  - Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes

// Wrong
this.setState({
counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((state, props) => ({
counter: state.counter + props.increment
}));

### Lifecycle [link] (https://reactjs.org/docs/state-and-lifecycle.html)

- componentDidMount
- componentWillUnmount
- use setState

#### LAB03 - lifecycle

##### Requirements:

- implement a clock display (text that display current date and time time until seconds)
- make user of:
  - componentDidMount
  - componentWillUnmount
  - useState

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)

[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-03-solution)

### React Lists

#### LAB04 - Lists - _To code along_

Starting of main Lab app - Todo List.
Todo object:

- id
- name
- description
- duedate
- priority level [1,2,3]
- label

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-00)
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-04-solution)

iterate items in a list
mention key tag is for react keep track on the dom as its outputit, must be unique in items list

### Combine multiple Components ans its reusability

#### LAB05 - components integration

##### Requirements:

- add pass list to a component named TodoList. Pass todo content to another component named TodoItem

[Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-04-solution)
[Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-05-solution)

- React developer tools add plugin and showcase

#### LAB06 - Challange - remove item

##### Requirements:

- add a button on each TodoItem that remove the item from the list being displayed
  [Starting point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-05-solution)
  [Ending point](https://stackblitz.com/github/reactjs-essentials/training-content/tree/main/lab-06-solution)

  - mention the way to extraxt directly const from the props.

#### Effect hook: useEffect (built-in)

- Effects term is commonly used to refer to operations that have some "side effect" on app like for example data fetching, subscriptions, or manually changing the DOM from React components
- useEffects is the built in hook for tacke this cases.
- Use effects run a funtion on every render of the component (on init, on changhes)
- useEffects first as an argument is to declare the function it will run everytime. as an optional second argument you can pass what is called dependency array - an array of ... If not declared, it will run everytime, If declared as empty it will only run on initial render other wise it will run aswell on dependency state values

#### To remember

- Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.
- The state of each component is completely independent. Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state

#### Custom Hooks

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code using Hooks.
You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. We are excited to see what custom Hooks the React community will come up with.

#### Hooks api reference

https://reactjs.org/docs/hooks-reference.html

#### LAB04 - React hook

### Combine components and its reusability

#### LAB05 - multi component page (first lab of integrated lab)

```
  // Given a predefined layout
  // Header, List, item
```

talk and draw a component tree

#### React Context [Link](https://reactjs.org/docs/context.html)

- sharing of data between components without passing props (acts like global data)

## Server render

### REST service API

#### LAB06 - API - from LAB04 add Real API CALL

#### LAB07 - API - from LAB05 Add POST, DELETE

## Dev tools, debugging & performance monitoring

- React Developer Tools
- Handling production time errors with Error Boundaries

## Styling React components

### LAB08 - style

## Testing react components

### LAB09 - test

## Forms in react [link](https://reactjs.org/docs/forms.html)

### LAB010 - Form

## React hooks deep dive

- state hook [link](https://reactjs.org/docs/hooks-state.html)
- effect hooks [link](https://reactjs.org/docs/hooks-effect.html)
- custom hooks [link](https://reactjs.org/docs/hooks-custom.html)

### LAB11 - hooks advanced

## Redux deep dive

### LAB12 - redux sample

## React Security

### LAB13 - implementing seccurity features

## React Best practices

### folder structure example

### git flow

### tools & extensions

### build run and deploy manually

### CI CD
