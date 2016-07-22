import React, { Component } from 'react';
import Immutable from 'immutable';
import SearchBar from './searchBar';
import Note from './note';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };
    this.createNode = this.createNode.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    // init component state here
  }

  createNode(text) {
    const id = '1';
    const note = {
      title: text,
      text: 'IS THIS WORKING?!?!',
      x: 400,
      y: 12,
      zIndex: 26,
    };

    this.setState({
      notes: this.state.notes.set(id, note),
    });
  }

  onDeleteClick(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }


  render() {
    return (
      <div>
        <SearchBar onButtonPress={this.createNode} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note key={id} id={id} note={note} onDeleteClick={this.onDeleteClick} />;
        })}
      </div>
    );
  }
}

export default App;
