import React from "react";

interface TestProps {
  name: string;
}

class Test extends React.Component<TestProps> {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

export default Test;
