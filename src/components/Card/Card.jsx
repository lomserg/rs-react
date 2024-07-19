import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <p>{this.props.data.name}</p>
        <p>{this.props.data.birth_year}</p> */}
      </div>
    );
  }
}

export default Card;
