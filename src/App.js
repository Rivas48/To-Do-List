import React, {Component} from 'react';
import './App.css';
import ToDoPage from './Components/toDoPage';

class Container extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToDoPage  
          />
        </header>
      </div>
    );
  }
}

export default Container;
