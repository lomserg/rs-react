import { Component } from "react";
import CardTemplate from "../CardTemplate/CardTemplate";
interface SearhResultProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_date: string;
  gender: string;
}

interface Props {
  results: SearhResultProps[];
}

class SearhResult extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.results.map((results, index) => (
          <CardTemplate
            key={index}
            name={results.name}
            height={results.height}
            mass={results.mass}
            hair_color={results.hair_color}
            skin_color={results.skin_color}
            eye_color={results.eye_color}
            birth_date={results.birth_date}
            gender={results.gender}
          />
        ))}
      </div>
    );
  }
}

export default SearhResult;
