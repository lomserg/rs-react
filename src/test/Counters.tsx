import * as React from "react";
import Counter from "./Counter";

interface CounterState {
  id: number;
  value: number;
}

interface CountersState {
  counters: CounterState[];
}

class Counters extends React.Component<object, CountersState> {
  state: CountersState = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };

  increment = (counterId: number) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value + 1 };
      }
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId: number) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            increment={() => this.increment(counter.id)}
            onDelete={() => this.handleDelete(counter.id)}
            value={counter.value}
          />
        ))}
      </>
    );
  }
}

export default Counters;
