import { connect } from "react-redux";
import AddTodo from './AddTodo';

let mapStateToProps = (state) => {
  return {
    textareaValue: state.AddTodo.textareaValue
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ChangeArea: (textArea) => {
      dispatch({type: "CHANGE-AREA", text: textArea})
    },
    AddTodo: () => {
      dispatch({type: "ADD-TODO"})
    },
    DeleteTodo: (id) => {
      dispatch({type: "DELETE-TODO", todoId: id})
    },
    ChangeCompleted: (checked, id) => {
      dispatch({type: "CHANGE-COMPLETED", checked: checked, todoId: id})
    },
    ChangePlaceTodo: (source, destination) => {
      dispatch({type: "CHANGE-PLACE-TODO", source: source, destination: destination})
    },
    ChangeIsContentEditable: (id) => {
      dispatch({type: "CHANGE-CONTENTEDITABLE", todoId: id})
    },
    ChangeTextInTodo: (id, textContent) => {
      dispatch({type: "CHANGE-TEXT-IN-TODO", todoId: id,
    textContent: textContent})
    }
  }
} 

let AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodoContainer;