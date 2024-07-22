import { Component, ReactNode } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import GetPeople from "../../components/GetProple/GetPeaole";
import Counter from "../../components/Counter";
import Counters from "../../components/Counters";
import Cards from "../../components/Cards/Cards";
interface IProps {}

interface IState {
  search: string;
}

class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { search: "" };

    this.changeSearch = this.changeSearch.bind(this); // Bind the method to the class instance
  }

  changeSearch(searchStr: string) {
    this.setState({ search: searchStr });
  }

  render(): ReactNode {
    return (
      <>
        <Cards />
        {/* <Counters /> */}
        {/* <SearchBar
          search={this.state.search}
          changeSearch={this.changeSearch}
        />
        <GetPeople people={[]} />  */}
      </>
    ); // Pass the method as prop
  }
}

export default Main;
