import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {useState} from "react";
import Button from '@mui/material/Button';

export default function MultilineTextFields() {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [acc, setAcc] = useState();
  return (
    <>
 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1></h1>
      </div>
      <div >
        <TextField
          id="standard-multiline-flexible"
          label="ID"
          variant="outlined"
          onChange={(e) => setId(e.target.value)}
        />
       </div>

       <div >
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
       </div>
    
      <div>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          onChange={(e) => setDesc(e.target.value)}
        />
       </div>

       <div>
        <TextField
          id="standard-multiline-static"
          label="Acceptance Criteria"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          onChange={(e) => setAcc(e.target.value)}
        />
      </div>
      
    </Box>
    <div style = {{marginLeft: "10px"}}>
    <Button variant="contained" >Submit</Button>
    </div>
   
    </>
  );
}
