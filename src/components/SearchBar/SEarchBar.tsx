import React from "react";

interface SearchBarProps {
  search: string;
  changeSearch: (searchStr: string) => void;
}

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  initSearchBar() {
    if (localStorage.getItem("searchbar") as string) {
      const searchQuery = localStorage.getItem("searchbar") as string;

      this.props.changeSearch(searchQuery);
    }
  }
  saveSearchQuery = () => {
    localStorage.setItem("searchbar", this.props.search);
  };
  componentDidMount() {
    window.addEventListener("beforeunload", this.saveSearchQuery);
  }
  render(): React.ReactNode {
    console.log(this.state);
    console.log(this.props.search);

    return (
      <div className="searchbar">
        <input
          type="search"
          value={this.props.search}
          onChange={(e) => {
            console.log(e.target);
            this.props.changeSearch(e.target.value);
          }}
        />
        ;
      </div>
    );
  }
}

// const SearchBar: React.FC<SearchBarProps> = ({ search, changeSearch }) => {
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     changeSearch(event.target.value);
//   };

//   return <input type="text" value={search} onChange={handleInputChange} />;
// };

export default SearchBar;
