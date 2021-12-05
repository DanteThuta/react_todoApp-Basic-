import react from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
  // console.log(filteredToDos);
  return (
    <div className="todo-container">
      <ul>
        {filteredToDos.map((toDo) => (
          <ToDo
            text={toDo.text}
            id={toDo.id}
            key={toDo.id}
            toDo={toDo}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
