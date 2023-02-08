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
      <TicketCard />
      <MultilineTextFields/>
     
      <ContainedButton/>

     
   
      
    </>
      
  );
}

export default App;
