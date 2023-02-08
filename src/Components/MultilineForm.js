import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="ID"
          multiline
          maxRows={4}
          variant="standard"
        />
       </div>
    
      <div>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
        />
       </div>

       <div>
        <TextField
          id="standard-multiline-static"
          label="Acceptance Criteria"
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
}
