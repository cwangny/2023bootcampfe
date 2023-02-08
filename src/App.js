import './App.css';
import ButtonAppBar from './Components/AppBar';
import MultilineTextFields from './Components/MultilineForm';
import ContainedButton from './Components/SubmitButton';
import TicketCard from './Components/TicketCard';

function App() {
  // Returs JSX ()
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <div style={{
        display: "flex",
      }}>
        <div style={{
          width: "700px"
        }}>
          <MultilineTextFields/>  
        
          <ContainedButton/>
        </div>
        <div>
          <TicketCard/>
        </div>

      </div>
     
      

      {/* <TicketCard /> */}
      
     
   
      
    </>
      
  );
}

export default App;
