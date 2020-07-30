import React from 'react';
import { useState } from 'react';
import Todos from './Todos';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, done: false, todoContent: 'drink coffee'},
    {id: 2, done: false, todoContent: 'watch hulu'}
  ]);

  const [userEntry, setUserEntry] = useState('');

  const handleClick = (id) => {
    let todosLeft = todos;
    todosLeft = todosLeft.map( todo => {
      return todo.id === id ? {...todo, done: !todo.done} : todo
    }); 
    
    setTodos(todosLeft);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //userEntry is reset after setting state
    const updatedTodos = [...todos, { id: todos.length + 1, todoContent: userEntry }];
    setTodos(updatedTodos);
    setUserEntry('');
  };

  const handleChange = (e) => {
    setUserEntry(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        To Do List (React)
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" onChange={handleChange} value={userEntry} />
          <input type="submit" value="Submit"/>
        </form>
        <Todos  props={todos}
                handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
