import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo';

const Loader = ({ isLoading, children }) => {
  return (
     <>
        {isLoading &&  <div>Loading...</div>}
        {children}
     </>
  )
};
const ToDoContainer = () => {
  const { toDoL, isLoading, error, setToDoL } = useGetAllToDo(); 
  const [search, setSearch] = useState('');

  const addTodo = (title) => {
    const newTodoItem = { id: Date.now(), title };
    setToDoL((prevTodos) => [...prevTodos, newTodoItem]); 
  };

  const removeTodo = (id) => {
    setToDoL((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = toDoL.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos: {error.message}</p>;

  return (
    <div>
      <SearchInput search={search} onSearchChange={setSearch} />
      <Loader isLoading={isLoading}>
      <AddToDoComponent onAdd={addTodo} />
      <ToDoTable todos={filteredTodos} onRemove={removeTodo} />
        </Loader>
    </div>
  );
};

export default ToDoContainer;
