import './App.css';
import {Greet} from './components/Greet';
function App() {
  return (
    <div className="App">
      <Greet name = "RDJ" heroName = "Iron Man" />
      <Greet name = "T'Challa" heroName = "Black Panther">
      <h1>Wakanda Forever!</h1>
      </Greet>
    </div>
  );
}

export default App;
