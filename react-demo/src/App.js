import "./App.css";
import { Greet } from "./components/Greet";
import { ClickHandler } from "./components/ClickHandler";
import { Message } from "./components/Message";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { Stylesheet } from "./components/Stylesheet";
import { Form } from "./components/Form";
import { PostList } from "./components/PostList";
function App() {
  return (
    <div className="App">
      {/* <Greet name = "RDJ" heroName = "Iron Man" />
    <Greet name = "T'Challa" heroName = "Black Panther">
    <h1>Wakanda Forever!</h1>
    </Greet>
      <Message />
      <ClickHandler />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet />
      <Form />*/}
      <PostList />
    </div>
  );
}

export default App;
