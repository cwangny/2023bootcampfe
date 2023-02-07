
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Form({props}) {

	console.log(props, "from form component")
	return (
		<>
		<form>
			
			<input type="text" id="fname" name="fname"/>
			<label for="lname">Last name:</label>
			<input type="text" id="lname" name="lname"/>
		</form>

		
    <Stack direction="row" spacing={2}>
      <Button>{props}</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
		</>
		
	)
}

export default Form;


