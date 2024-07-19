import React from "react";
import axios from "axios";

interface Props {
  people: any[]; // Define the people prop as an array of any type
}
interface State {
  people: any[]; // Define the state to hold an array of people
}
class GetPeople extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    this.getPeople();
  }
  getPeople() {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        this.setState({ people: response.data.results });
      })
      .catch((error) => {
        console.error("Error fetching people:", error);
      });
  }
  render(): React.ReactNode {
    const { people } = this.state;
    console.log(people);
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default GetPeople;
