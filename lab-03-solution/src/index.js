import React from "react";
import { createRoot } from "react-dom/client";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: props.ticks };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>lab 03</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Clock />);
