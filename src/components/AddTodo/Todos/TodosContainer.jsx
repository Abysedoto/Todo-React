import Todos from './Todos'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    todosArray: state.AddTodo.todosArray
  }
}

let TodosContainer = connect(mapStateToProps)(Todos)

export default TodosContainer;