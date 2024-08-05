import { Component, ReactNode, ChangeEvent } from "react";
import GetPeopleApi from "../../components/GetPeople/GetPeaole";
import SearchInput from "../../components/Search/SearchInput";
import SearchButton from "../../components/Search/SearchButton";
import SearhResult from "../../components/SearchResult.tsx/SearchResult";
interface IProps {}

interface IState {
  searchTerm: string;
  results: any[]; // Adjust the type according to your actual results structure
  loading: boolean;
}

class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchTerm: this.savedSearchTerm,
      results: [],
      loading: false,
    };
  }
  savedSearchTerm = localStorage.getItem("searchTerm") || "";
  // changeSearch(searchStr: string) {
  //   this.setState({ search: searchStr });
  // }
  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchClick = () => {
    this.performSearch();
  };

  componentDidMount() {
    this.performSearch();
  }
  async performSearch() {
    this.setState({ loading: true });
    const { searchTerm } = this.state;
    try {
      const data = await GetPeopleApi(searchTerm.trim());
      this.setState({ results: data.results, loading: false });
      localStorage.setItem("searchTerm", searchTerm.trim());
    } catch (error) {
      console.error("Search failed", error);
      this.setState({ loading: false });
    }
  }
  render(): ReactNode {
    const { results, searchTerm } = this.state;
    console.log(this.state);
    return (
      <>
        <div>
          <SearchInput value={searchTerm} onChange={this.handleInputChange} />
          <SearchButton onClick={this.handleSearchClick} />
          <SearhResult results={results} />
        </div>
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
