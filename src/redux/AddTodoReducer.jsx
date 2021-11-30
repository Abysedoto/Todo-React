let initialState = {
  textareaValue: "",
  todosArray: [

  ],
}

const addTodoReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case "CHANGE-AREA":
      stateCopy.textareaValue = action.text
      return stateCopy;
    case "ADD-TODO":
      if (stateCopy.textareaValue === "") {return stateCopy;}
      stateCopy.todosArray.unshift({id: `${Date.now()}`, completed: false, text: state.textareaValue,
    isContentEditable: false})
      stateCopy.textareaValue = ""
      return stateCopy;
    case "DELETE-TODO":
      for (let i=0; i<stateCopy.todosArray.length; i++) {
        if (action.todoId === stateCopy.todosArray[i].id) {
          stateCopy.todosArray.splice(i, 1)
        }
      }
      return stateCopy
    case "CHANGE-COMPLETED": 
      if (action.checked === true) {
        for (let i=0; i<stateCopy.todosArray.length; i++) {
          if (action.todoId === stateCopy.todosArray[i].id) {
            stateCopy.todosArray[i].completed = true;
          }
        }
      } else {
        for (let i=0; i<stateCopy.todosArray.length; i++) {
          if (action.todoId === stateCopy.todosArray[i].id) {
            stateCopy.todosArray[i].completed = false
          }
        }
      }
      return stateCopy
    case "CHANGE-PLACE-TODO":
      let [reorderedItem] = stateCopy.todosArray.splice(action.source.index, 1);
      stateCopy.todosArray.splice(action.destination.index, 0, reorderedItem)
      return stateCopy;
    case "CHANGE-CONTENTEDITABLE": 
      for (let i=0; i<stateCopy.todosArray.length; i++) {
        if (action.todoId === stateCopy.todosArray[i].id) {
          stateCopy.todosArray[i].isContentEditable = !stateCopy.todosArray[i].isContentEditable
        }
      }
      return stateCopy
    case "CHANGE-TEXT-IN-TODO":
      for (let i=0; i<stateCopy.todosArray.length; i++) {
        if (action.todoId === stateCopy.todosArray[i].id) {
          stateCopy.todosArray[i].text = action.textContent
        }
      }
      return stateCopy
    default:
      return stateCopy;
  }
}

export default addTodoReducer;