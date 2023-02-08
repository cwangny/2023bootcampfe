import { useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import MultilineTextFields from './Components/MultilineForm';

function App() {
  // Returs JSX ()
  return (
    <>
      <div>
        <body>
          <Header></Header>
          <MultilineTextFields></MultilineTextFields>
        </body>
      </div>
    </>
      
  );
}

export default App;
