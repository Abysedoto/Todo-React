import React from "react";
import TodosContainer from "./Todos/TodosContainer";

const AddTodo = (props) => {
  let areaRef = React.createRef()
  const onChangeArea = () => {
    let textArea = areaRef.current.value;
    props.ChangeArea(textArea)
  }
  const onAddTodo = (event) => {
    event.preventDefault()
    props.AddTodo()
  }
  const onAddTodoEnter = (event) => {
    if (event.code === "Enter") {
      event.preventDefault()
      props.AddTodo()
    }
  }
  return (
    <div className="addTodo">
      <h1 className="addTodo-title">TodoList</h1>
      <form id="addTodo-form">
        <textarea onChange={onChangeArea} onKeyDown={onAddTodoEnter} value={props.textareaValue}
        ref={areaRef} maxLength={100} className="addTodo-area" name="" id="" cols="30" rows="10" />
        <button onClick={onAddTodo} className="addTodo-btn">
          <div className="addTodo-btn-line1"></div>
          <div className="addTodo-btn-line2"></div>
        </button>
      </form>
      <TodosContainer ChangeTextInTodo={props.ChangeTextInTodo}
      ChangeIsContentEditable={props.ChangeIsContentEditable}
      ChangePlaceTodo={props.ChangePlaceTodo} DeleteTodo={props.DeleteTodo} 
      ChangeCompleted={props.ChangeCompleted}/>   
    </div>
  )
}

export default AddTodo;