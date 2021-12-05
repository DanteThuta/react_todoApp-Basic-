import react from "react";

const Form = ({ toDos, setToDos, inputText, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(inputText);
    if (!inputText) {
    }
    setToDos([
      ...toDos,
      { text: inputText, id: Math.random() * 1000, completed: false },
    ]);
    setInputText("");
    console.log(toDos);
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form className="form-contaier">
      <div className="form-input">
        {/* <h3>test</h3> */}
        <input type="text" value={inputText} onChange={inputTextHandler} />
        <button onClick={submitHandler} class="btn btn-outline-primary">
          Submit
        </button>
      </div>
      <div>
        <select className="form-select sm" onChange={statusHandler}>
          {/* <option value="default">Choose Anything</option> */}
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
