import { useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";

const App = () => {
  const [task, setTask] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };

  const showTask = (event) => {
    const newTask = [...task];
    newTask.push(event.target.value);
    setTask(newTask);
    return <p>{newTask}</p>;
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <img className="logo" src={Logo} alt="logo todolist" />
          <h1>Todo List</h1>
        </header>
        <main>
          <input
            type="text"
            name="put"
            value={task}
            placeholder="my new task"
            onChange={handleChange}
          />
          <button type="button" onClick={showTask}>
            Add task
          </button>
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
