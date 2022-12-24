import './App.css';
import {Greet} from './components/Greet';
function App() {
  return (
    <div className="App">
      <Greet user="Charan" />
      <Greet user="Vignesh"/>
    </div>
  );
}

export default App;
