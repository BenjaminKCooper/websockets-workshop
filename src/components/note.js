import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';

let FontAwesome = require('react-fontawesome');

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
  }

  onEditClick(event) { // CHANGES THIS TO BE PRETTIER!!!! YOU MAKE MAKE IT LIKE ONE LINE
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  }


  onDeleteClick(event) {
    this.props.onDeleteClick(this.props.id);
  }

  renderEdit() {
    if (this.state.isEditing) {
      // this.setState({ isEditing: true });
      return <i onClick={this.onEditClick} className="fa fa-check-square" aria-hidden="true"></i>;
    } else {
      // this.setState({ isEditing: false });
      return <i onClick={this.onEditClick} className="fa fa-pencil-square-o" aria-hidden="true"></i>;
    }
  }

  render() {
    return (
      <Draggable
        handle=".topBoxRight"
        grid={[25, 25]}
        defaultPosition={{ x: 11, y: 23 }}
        position={{ x: this.props.note.x, y: this.props.note.y }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
      <div className="NoteBody">
        <div className="NoteTop">
          <ul className="topBoxLeft">
            <li>{this.props.note.title}</li>
            {this.renderEdit()}
            <li><i onClick={this.onDeleteClick} className="fa fa-trash-o" aria-hidden="true"></i></li>
          </ul>
          <h className="topBoxRight"><i className="fa fa-arrows-alt" aria-hidden="true"></i></h>
        </div>
        <div className="NoteBottom">
          <div className="noteMD" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />
        </div>
      </div>
      </Draggable>
    ); }
}

export default Note;
