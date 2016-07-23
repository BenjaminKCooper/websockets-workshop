import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
  }
  onButtonPress(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
    this.props.onButtonPress(event.target.value);
  }
  render() {
    return (
      <div className="searchBar">
        <input className="searchBarInput" onChange={this.onInputChange} value={this.state.searchterm} />
        <button className="searchBarButton" type="submit" onClick={this.onButtonPress} value={this.state.searchterm} >Create</button>
      </div>
  );
  }
}

export default SearchBar;
