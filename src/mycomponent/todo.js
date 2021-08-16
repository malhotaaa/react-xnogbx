import React from 'react';

export const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <p>serial number: {todo.sno}</p>
      <h4>Todo :{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(todo)
        }}
      >
        Delete
      </button>
    </div>
  );
};
