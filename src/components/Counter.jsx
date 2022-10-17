import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <>
        <span>current number:{this.state.number}</span>
        <br />
        <button
          style={{ marginRight: 2 }}
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
        <button
          style={{ marginRight: 2 }}
          onClick={() => this.setState({ number: this.state.number - 1 })}
        >
          -
        </button>
        <button
          style={{ marginRight: 2 }}
          onClick={() => this.setState({ number: 0 })}
        >
          reset
        </button>
      </>
    );
  }
}

export default Counter;
