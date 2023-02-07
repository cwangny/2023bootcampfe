import { useState } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';

function App() {
  // Returs JSX ()
  
  const [count, setCount] = useState("hello");
  console.log(count, "from app ")


  return (
    <>
      <div>
        <body>
          Hello World
          <Header></Header>
          {
            count
          }
          <button onClick={()=>setCount(10)}>
            Add
          </button>
          <Form props={count}></Form>
        </body>
      </div>
    </>
      
  );
}

export default App;
