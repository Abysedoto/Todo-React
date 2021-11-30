import { createStore, combineReducers } from 'redux';
import todosReducer from "./TodosReducer";
import addTodoReducer from "./AddTodoReducer";

let reducers = combineReducers({
  AddTodo: addTodoReducer,
  Todos: todosReducer,
})

let store;

if (localStorage.getItem("stateData") !== null) {
  store = createStore(reducers, JSON.parse(localStorage.getItem("stateData")))
} else {
  store = createStore(reducers);
}

export default store;