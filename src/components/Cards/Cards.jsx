import React, { Component } from "react";
import Card from "../Card/Card";

class Cards extends Component {
  state = {};
  render() {
    const names = ["asd", "asd", "asd"];
    return (
      <>
        {names.map((name) => (
          <Card>{name}</Card>
        ))}
      </>
    );
  }
}

export default Cards;
