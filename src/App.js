import React from 'react';
import './App.css';
import TodoinputComponents from './Components/TodoinputComponents';
import TodoListComponents from './Components/TodoListComponents';

import 'bootstrap/dist/css/bootstrap.css';
import TodoitemsComponents from './Components/TodoitemsComponents';

function App() {
  return (
    <div className="App m-5">
      <TodoinputComponents/>
      <TodoListComponents/>
      <TodoitemsComponents/>
      
    </div>
  );
}

export default App;
