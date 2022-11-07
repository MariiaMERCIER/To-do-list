import { useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";

const App = () => {
  const [getTask, setGetTask] = useState([]);
  const [items, setItems] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setItems(event.target.value);
  };

  const showTask = (event) => {
    const newTask = [...getTask];
    if (items) {
      newTask.push(items);
      setGetTask(newTask);
      setItems("");
    } else {
      alert("Entrez le nom de tâche!");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <img className="logo" src={Logo} alt="logo todolist" />
          <h1>Todo List</h1>
        </header>
        <main>
          <div className="listTask">
            {getTask.map((items, index) => {
              return (
                <div key={index} className="tâche">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => {
                      setIsDone(!isDone);
                    }}
                  />

                  <span
                    className="items"
                    style={{
                      textDecoration: isDone === true ? "line-through" : null,
                    }}
                  >
                    {items}
                  </span>
                  <span>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="test">
            <input
              type="text"
              name="put"
              value={items}
              placeholder="my new task"
              onChange={handleChange}
            />
            <button type="button" onClick={showTask}>
              Add task
            </button>{" "}
          </div>
        </main>
        <footer>
          <p>
            Made with <span className="bold">React</span>at{" "}
            <span className="bold">Le Reacteur</span> by{" "}
            <span className="bold">Mariia MERCIER</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
