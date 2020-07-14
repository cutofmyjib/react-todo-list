import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ props, handleClick }) => {
    const todos = props.map((prop) => {
        return (
            <TodoItem
                handleClick={handleClick}
                props={prop}
            />
        );
    });

    return (
        <div className="todo-section">
          <ul>
            {todos}
          </ul>
        </div>
    );
};

export default Todos;