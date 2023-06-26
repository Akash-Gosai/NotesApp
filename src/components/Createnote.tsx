import { useState } from 'react';
import { InputBase, Box, Button, styled, Typography} from '@mui/material';
import { NoteObject } from '../models/note';
import { Title_Limit, Details_Limit } from '../constants/constant';
import { v4 as uuid } from 'uuid';

const Container = styled(Box)`
   & > * {
    margin: 20px 20px 20px 0;
   }

   & > div > input[type="text"] {
    border-bottom: 1px solid #111111 ;
    opacity: 0.4;
    width: 500px;
    padding-right: 25px;
   } 

   & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
   }

   & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
   }
`;


const Error = styled(Typography)`
   background: red;
   color: white;
   padding: 10px;
   width: 50%;
`

const defaultObj = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: (new Date().toLocaleString()).toString(),
}

interface ICreateNoteProps {
    addNotes :(note: NoteObject) => void
}


const Createnote: React.FC<ICreateNoteProps>= ({addNotes}) => {


    const [note, setNote]= useState<NoteObject>(defaultObj);

    const [error, setError]= useState<string>('');


    const onValueChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        if(error){
            setError('');
        }
        setNote ({...note, [e.target.name]: e.target.value })

    } 

    const onCreateNote = ()=>{
        if(!note.title && !note.details){
            setError("All fields are Mmndatory!!!!");
            return;
        }
        addNotes({...note, id: uuid() })
        setNote(defaultObj);
    }
    return (
        <Container>
            <InputBase  placeholder='Title'
             onChange={(e) => onValueChange(e)}
             name="title"
             value={note.title}
             inputProps={{
                maxlength: Title_Limit
             }}
             />
            <Box component="span">{note.title.length}/{Title_Limit}</Box>

            <InputBase  placeholder='Details'
             onChange={(e) => onValueChange(e)}
             name="details"
             value={note.details}
             inputProps={{
                maxlength: Details_Limit
             }}
             />
            <Box component="span">{note.details.length}/{Details_Limit}</Box>

            <InputBase type='color'  defaultValue={'#F5F5F5'} 
             onChange={(e) => onValueChange(e)}
             name="color"
             />
            <Button 
            
                variant="outlined"
                onClick={()=> onCreateNote()}
                >Create</Button>
                { error && <Error>{error}</Error> }

        </Container>
    )
}
export default Createnote;