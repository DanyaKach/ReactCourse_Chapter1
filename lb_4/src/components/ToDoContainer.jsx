import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo';

const ToDoContainer = () => {
  const { toDoL, isLoading, error, setToDoL } = useGetAllToDo(); // Отримуємо дані з hook
  const [search, setSearch] = useState('');

  // Додаємо нове завдання
  const addTodo = (title) => {
    const newTodoItem = { id: Date.now(), title };
    setToDoL((prevTodos) => [...prevTodos, newTodoItem]); // Оновлюємо за допомогою функції
  };

  // Видаляємо завдання
  const removeTodo = (id) => {
    setToDoL((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Фільтруємо завдання на основі пошуку
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
