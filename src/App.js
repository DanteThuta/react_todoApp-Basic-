import "./App.css";
import react, { useEffect, useState } from "react";

//Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case "incompleted":
        setFilteredToDos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  //Saving to Locals

  const saveLocalToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  const getLocalToDos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  };

  //useEffect (only Once run)
  useEffect(() => {
    getLocalToDos();
  }, []);

  //useEffect
  useEffect(() => {
    // console.log("hy");
    saveLocalToDos();
    filterHandler();
  }, [toDos, status]);
  return (
    <div className="App">
      <header>
        <h2>My Todo List</h2>
      </header>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
