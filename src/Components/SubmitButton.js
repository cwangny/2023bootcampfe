import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function ContainedButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Submit</Button>
    </Stack>
  );
}