import React, { Component } from 'react';
import Immutable from 'immutable';
import SearchBar from './searchBar';
import Note from './note';

import * as firebasedb from './firebasedb';


const uuid = require('uuid'); // I learned how to implement a uuid from : https://www.npmjs.com/package/uuid


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };
    this.createNode = this.createNode.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.updatePostion = this.updatePostion.bind(this);
    this.editChangeText = this.editChangeText.bind(this);
    // this.handleNotes = this.handleNotes.bind(this);
    this.createNode = this.createNode.bind(this);

    // firebasedb.onNotesChanged(this.handleNotes);
  }

  componentWillMount() {
    firebasedb.onNotesChanged(notes => {
      this.setState({ notes: Immutable.Map(notes) });
    });
  }


  onDeleteClick(id) {
    firebasedb.delNoteFireBase(id);
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  createNode(text) {
    // const id = uuid.v1();
    const note = {
      title: text,
      text: '',
      x: 400,
      y: 12,
      zIndex: 26,
    };
    firebasedb.createNoteFireBase(note);
    // this.setState({
    //   notes: this.state.notes.set(id, note),
    // });
  }

  editChangeText(id, newText) {
    firebasedb.editNoteFireBase(id, newText);
    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { text: newText }); }),
    // });
  }

  updatePostion(id, newX, newY) {
    firebasedb.editNoteFireBaseXY(id, newX, newY);


    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, { x: newX, y: newY }); }),
    // });
  }

  // handleNotes(newNotes) {
  //   console.log('works');
  //   this.setState({ notes: newNotes });
  // }

  render() {
    return (
      <div>
        <SearchBar onButtonPress={this.createNode} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note key={id} id={id} note={note} updatePostion={this.updatePostion} editChangeText={this.editChangeText} onDeleteClick={this.onDeleteClick} />;
        })}
      </div>
    );
  }
}

export default App;
