import React from 'react';

const TodoItem = ({props, handleClick}) => {
    return (
        <li className="todo-item" 
            key={props.id}
            onClick={()=> {handleClick(props.id)}}>{props.todoContent}
        </li>
    );
}

export default TodoItem;