import { Component, ReactNode } from "react";
import GetPeopleApi from "../../components/GetPeople/GetPeaole";
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
    const { results } = this.state;
    console.log(this.state.results[0]);
    return (
      <>
        <div>
          {results.map((result, index) => (
            <div key={index}>
              <h2>{result.name}</h2>
              <p>Height: {result.height}</p>
              <p>Mass: {result.mass}</p>
              <p>Hair Color: {result.hair_color}</p>
              <p>Skin Color: {result.skin_color}</p>
              <p>Eye Color: {result.eye_color}</p>
              <p>Birth Year: {result.birth_year}</p>
              <p>Gender: {result.gender}</p>
            </div>
          ))}
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
