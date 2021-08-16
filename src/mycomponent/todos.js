import React from 'react';
import { Todo } from '../mycomponent/todo';

export const Todos = props => {
  let todosStyle = {
    backgroundColor: '#e6a510',
    textAlign: 'center',
    minHeight: '70vh',
    margin: '-1.7rem auto'
  };
  return (
    <div className="conatiner " style={todosStyle}>
      <h3 className="text-center my-4">Todos List</h3>
      {props.todos.length === 0
        ? 'No todos to display'
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />{' '}
                <hr />
              </>
            );
          })}
    </div>
  );
};
