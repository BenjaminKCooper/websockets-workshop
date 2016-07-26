import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDMktVjFsqx2AsRRxqEEis9suE-DYxeHKs',
  authDomain: 'react-notes-with-firebase.firebaseapp.com',
  databaseURL: 'https://react-notes-with-firebase.firebaseio.com',
  storageBucket: 'react-notes-with-firebase.appspot.com',
};
firebase.initializeApp(config);
// </script>


// functions to make that will push up to firebase:
//  update, create, delete, etc


const database = firebase.database();

// export function fetchNotes(callback) { /* ... */ }


// / notes from Tim's meeting

  //  onNotesChanged function within this firebasedb.js fa-pencil-square-o
    // this is a subscription call
    // db.ref('notes').on('value', (snapshot)=>{
    //  snapshot.val()
  // })


  // from within app call a function like 'handle notes' that takes in 'new_notes'


  // only the handleNotes function would be in the app.  Everything else in firebasedb.js


export function delNoteFireBase(id) {
  database.ref('notes').child(id).remove();
}

export function createNoteFireBase(newNote) {
  // let id = database.ref('notes').push(newNote);
  database.ref('notes').push(newNote);
}

export function editNoteFireBase(id, updatedText) {
  database.ref('notes').child(id).update({ text: updatedText });
}

export function editNoteFireBaseXY(id, NewX, NewY) {
  database.ref('notes').child(id).update({ x: NewX, y: NewY });
}

export function onNotesChanged(handleNotes) {
  database.ref('notes').on('value', snapshot => { // took out function(snapshot) and switched it to ...
    const newNotes = snapshot.val();
    console.log(newNotes);
    handleNotes(newNotes);
  });
}
