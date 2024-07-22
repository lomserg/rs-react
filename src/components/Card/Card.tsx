import React, { Component } from "react";

interface CardProps {
  id: number;
  name: string;
  married: boolean;
}

class Card extends Component<CardProps> {
  render() {
    const { id, name, married } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{married}</p>
      </div>
    );
  }
}

export default Card;
