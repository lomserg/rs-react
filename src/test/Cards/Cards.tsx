import React, { Component } from "react";
import Card from "../Card/Card";

interface CardState {
  id: number;
  name: string;
  married: boolean;
}

interface CardsState {
  cards: CardState[];
}

class Cards extends Component<{}, CardsState> {
  state: CardsState = {
    cards: [
      { id: 1, name: "serg", married: true },
      { id: 2, name: "dd", married: true },
      { id: 3, name: "e", married: true },
      { id: 4, name: "ser3g", married: true },
    ],
  };
  render() {
    return (
      <>
        {this.state.cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              married={card.married}
            />
          );
        })}
      </>
    );
  }
}

export default Cards;
