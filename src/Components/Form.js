import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Form({ handleAddTickets }) {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [acc, setAcc] = useState();

  const payload = {
    id: id,
    title: title,
    desc: desc,
    acc: acc,
  }

  const handleSubmit = () => {
    // POST request when the description and acceptance criteria are refering to AWS
    if (title === "AWS") {
      const dummyData = '[{"id": "1", "description": "As a user, I want to be able to log in to the application so that I can access my account.", "acceptance_criteria": "User can enter their username and password", "title": "Implement login functionality", "pc": "60"}, {"id": "4", "description": "As a user, I want to be able to complete my purchase by checking out my shopping cart.", "acceptance_criteria": "User can initiate the checkout process from their cart", "title": "Implement checkout process", "pc": "80"}, {"id": "14", "description": "As a user, I want to be able to compare products so that I can make an informed decision about which product to purchase.", "acceptance_criteria": "User can add products to a comparison list from the product details page", "title": "Add a product comparison feature", "pc": "40"}]';

      axios({
        method: 'POST',
        url: '',
        responseType: 'stream',
        body: {
          payload
        }
      })
        .then((response) => {
          console.log(response.data)
          handleAddTickets(response.data)
        })
        .catch((error) => {
          console.log(error)
          // Set dummy data if the backend is not working
          handleAddTickets(dummyData)
        })
    }
    
    // POST request when the description and acceptance criteria are refering to Hiring 
    if (title === "Hiring") {
      const dummyData = '[{"id": "1", "description": "As a user, I want to be able to log in to the application so that I can access my account.", "acceptance_criteria": "User can enter their username and password", "title": "Implement login functionality", "pc": "10"}, {"id": "4", "description": "As a user, I want to be able to complete my purchase by checking out my shopping cart.", "acceptance_criteria": "User can initiate the checkout process from their cart", "title": "Implement checkout process", "pc": "55"}, {"id": "14", "description": "As a user, I want to be able to compare products so that I can make an informed decision about which product to purchase.", "acceptance_criteria": "User can add products to a comparison list from the product details page", "title": "Add a product comparison feature", "pc": "100"}]';

      axios({
        method: 'POST',
        url: '',
        responseType: 'stream',
        body: {
          payload
        }
      })
        .then((response) => {
          console.log(response.data)
          handleAddTickets(response.data)
        })
        .catch((error) => {
          console.log(error)
          // Set dummy data if the backend is not working
          handleAddTickets(dummyData)
        })
      }
  }

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
        <div >
          <TextField
            id="standard-multiline-flexible"
            label="Ticket ID"
            variant="outlined"
            style={{
              width: "95%"
            }}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div >
          <TextField
            id="standard-multiline-flexible"
            label="Title"
            variant="outlined"
            style={{
              width: "95%"
            }}
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
            style={{
              width: "95%"
            }}
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
            style={{
              width: "95%"
            }}
            onChange={(e) => setAcc(e.target.value)}
          />
        </div>

      </Box>
      <div style={{
        marginLeft: "8px",
        marginTop: "10px",
        //  backgroundColor: "white",
        color: "green"
      }}>
        <Button variant="contained" style={{ backgroundColor: "green" }} onClick={() => handleSubmit()} >Search similar tickets</Button>
      </div>

    </>
  );
}
