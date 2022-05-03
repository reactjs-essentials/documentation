import React from "react";
export default class HelloClassComponent extends React.Component {
  render() {
    return <h2>hello, I am a {this.props.type}</h2>;
  }
}
