import React, { Component } from "react";

interface CounterProps {
  id: number;
  value: number;
  increment: (id: number) => void;
  onDelete: (id: number) => void;
}

class Counter extends Component<CounterProps> {
  render() {
    const { id, value, increment, onDelete } = this.props;
    return (
      <>
        <span>{value}</span>
        <button onClick={() => increment(id)}>Increment</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </>
    );
  }
}

export default Counter;
