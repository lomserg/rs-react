import { Component } from "react";

interface Props {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_date: string;
    gender: string
}
 

 
class CardTemplate extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() { 
        const {name, height, mass, hair_color, skin_color, eye_color, birth_date, gender} = this.props
        return ( 

            <div className="CardTemplate">
                <p>{name}</p>
                <p>{height}</p>
                <p>{mass}</p>
                <p>{hair_color}</p>
                <p>{skin_color}</p>
                <p>{eye_color}</p>
                <p>{birth_date}</p>
                <p>{gender}</p>
         
            </div>
         );
    }
}
 
export default CardTemplate;