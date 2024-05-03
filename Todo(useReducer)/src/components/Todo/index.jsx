


import React from 'react';
import Swal from 'sweetalert2';
import { Button } from 'antd';
const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = () => {
    dispatch({ type: 'TOGGLE_COMPLETED', id: todo.id });
  };

  const deleteTodo = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this todo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: 'DELETE_TODO', id: todo.id });
        Swal.fire('Deleted!', 'Your todo has been deleted.', 'success');
      }
    });
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
      <span>{todo.text}</span>
      <Button type="primary" danger onClick={deleteTodo}>Delete</Button>
    </div>
  );
};

export default Todo;
