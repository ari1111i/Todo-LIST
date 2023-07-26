import React from 'react';
import { TodoProvider, TodoList } from './components/UI/todo/TodoList';


const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;










