import { useEffect, useState } from 'react';
import Header from './components/Header';
import Createnote from './components/Createnote';
import Notes from './components/Notes';
import {Box} from '@mui/material';
import { NoteObject } from './models/note';
function App() {
  
  const[notes, setNote] = useState<NoteObject[]>([]);

  useEffect(()=> {
    if(sessionStorage.getItem('notes')){
      setNote (JSON.parse(sessionStorage.getItem('notes') as string));
    }
  },[])

  const addNotes = (note: NoteObject) => {
    setNote ([note,...notes ]);
    sessionStorage.setItem('notes',JSON.stringify([note,...notes ]));
  }

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id != id);
    setNote(updatedNotes);
    sessionStorage.setItem('notes',JSON.stringify(updatedNotes));

  }
  return (
  <>
   <Header/>
   <Box style={{padding: 20}}>
   <Createnote  addNotes={addNotes} />
   <Notes notes={notes} deleteNote={deleteNote}/>
   </Box>
  </>
  );
}

export default App;
