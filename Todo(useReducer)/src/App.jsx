
import React, { useReducer } from 'react';
import Todo from './components/Todo/index';
import Swal from 'sweetalert2';
import './Scss/styles.scss';
import { Button } from 'antd';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.todo],
      };
    case 'TOGGLE_COMPLETED':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = async () => {
    const { value: text } = await Swal.fire({
      title: 'Enter your todo',
      input: 'text',
      inputLabel: 'Todo',
      inputPlaceholder: 'Enter your todo',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Add',
      showLoaderOnConfirm: true,
    });

    if (text) {
      dispatch({ type: 'ADD_TODO', todo: { id: Date.now(), text, completed: false } });
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Button type="primary" onClick={addTodo}>Add Todo </Button>
      <hr />
      {state.todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default App;
