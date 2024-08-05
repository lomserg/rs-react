import { Component, ChangeEvent } from "react";
interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class SearchInput extends Component<SearchInputProps> {
  constructor(props: SearchInputProps) {
    super(props);
  }
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Search"
      />
    );
  }
}

export default SearchInput;
