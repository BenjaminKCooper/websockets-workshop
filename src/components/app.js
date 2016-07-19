import React, { Component } from 'react';
import Immutable from 'immutable';
import Welcome from './welcome';
import SearchBar from './searchBar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    // init component state here
    this.state = {
      notes: Immutable.Map(),
    };
  }

  createNode(text) {
    this.state.notes;
  }

  render() {
    return (
      <div>
        <SearchBar onButtonPress={this.createNode} />
      </div>
    );
  }
}

export default App;
