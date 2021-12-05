import react from "react";

const ToDo = ({ text, id, toDo, toDos, setToDos }) => {
  const deleteHandler = (e) => {
    // console.log("hi");
    setToDos(toDos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo-singlecontainer">
      <p className={toDo.completed ? "lthrough" : ""}>{text}</p>
      <button onClick={completeHandler} class="todo-edit">
        <i class="fas fa-check-square"></i>
      </button>
      <button onClick={deleteHandler} class="todo-delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
