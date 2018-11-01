import React, {Component} from 'react';
import './App.css';
import ToDoPage from './Components/toDoPage';

class App extends Component {
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

export default App;
