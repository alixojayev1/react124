import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist/Todolist';
import RestCountrist from './RestCountrist/RestCountrist';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todolist/>
        <RestCountrist/> 
      
      </header>
      
    </div>
  
  );
}

export default App;
