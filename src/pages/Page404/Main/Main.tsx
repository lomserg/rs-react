import { Component, ReactNode } from "react";
import SearchBar from "../../../components/SearchBar/SEarchBar";
import Avatar from "../../../components/Avatar";
import Clock from "../../../components/Clock";

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
        <Clock date={new Date()} />
        <Avatar source={{ src: "path_to_image.jpg", description: "test" }} />
        <SearchBar
          search={this.state.search}
          changeSearch={this.changeSearch}
        />
      </>
    ); // Pass the method as prop
  }
}

export default Main;
