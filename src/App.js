import React from 'react';
import Todos from './Todos';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, todoContent: 'drink coffee'},
        {id: 2, todoContent: 'watch hulu'}
      ],
      userEntry: ''
    };
  };

  handleClick = (id) => {
    const todosLeft = this.state.todos.filter( todo => {
      return todo.id !== id;
    });
    this.setState({todos: todosLeft});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //userEntry is reset after setting state
    this.setState(({ todos, userEntry }) => {
      return {
        todos: [...todos, { id: todos.length + 1, todoContent: userEntry }],
        userEntry: ''
      }
    });
    //use hooks later
  }

  handleChange = (e) => {
    this.setState({userEntry: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          To Do List (React)
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" onChange={this.handleChange} value={this.state.userEntry} />
          <input type="submit" value="Submit"/>
        </form>
        <Todos  props={this.state.todos}
                handleClick={this.handleClick} />

      </div>
    );
  }
}

export default App;
