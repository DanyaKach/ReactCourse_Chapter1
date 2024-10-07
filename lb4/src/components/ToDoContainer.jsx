import React, { useState, useEffect } from 'react';
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo'; 

const ToDoContainer = () => {
  const { toDoL, isLoading, error, setToDoL } = useGetAllToDo(); 
  const [search, setSearch] = useState('');

  const addTodo = (title) => {
    const newTodoItem = { id: Date.now(), title };
    setToDoL([...toDoL, newTodoItem]); 
  };

  const removeTodo = (id) => {
    setToDoL(toDoL.filter((todo) => todo.id !== id));
  };

  const filteredTodos = toDoL.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos: {error.message}</p>;

  return (
    <div>
      <AddToDoComponent onAdd={addTodo} />
      <SearchInput search={search} onSearchChange={setSearch} />
      <ToDoTable todos={filteredTodos} onRemove={removeTodo} />
    </div>
  );
};

export default ToDoContainer;
