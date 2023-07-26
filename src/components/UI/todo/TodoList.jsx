import React, { createContext, useContext, useState } from 'react';
import './TodoList.css'; 

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodoContext();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

const TodoList = () => {
  const { todos, addTodo } = useTodoContext();
  const [newTask, setNewTask] = useState('');

  const handleAddTodo = () => {
    if (newTask.trim() !== '') {
      addTodo(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      <h2>TODO-LIST</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className="add-todo">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add..."
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
    </div>
  );
};

export { TodoProvider, TodoList };

