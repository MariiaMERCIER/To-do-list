import "./App.css";
import Logo from "./images/logo.png";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <header>
          <img className="logo" src={Logo} alt="logo todolist" />
          <h1>Todo List</h1>
        </header>
        <main>
          <input type="text" name="put" value="" placeholder="my new task" />
          <button type="button">Add task</button>
        </main>
        <footer>
          <p>
            Made with <span>React</span>at <span>Le Reacteur</span> by{" "}
            <span>Mariia MERCIER</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
