import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponent';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo';

const ToDoContainer = () => {
  const { toDoL, isLoading, error, setToDoL } = useGetAllToDo(); // Завантажуємо дані через хук
  const [search, setSearch] = useState('');

  const addTodo = (title) => {
    const newTodoItem = { id: Date.now(), title };
    setToDoL((prevTodos) => [...prevTodos, newTodoItem]); // Додаємо новий ToDo
  };

  const removeTodo = (id) => {
    setToDoL((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Видаляємо ToDo
  };

  // Функція для редагування ToDo
  const editTodo = (id, newTitle) => {
    setToDoL((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  // Фільтрація ToDo за пошуком
  const filteredTodos = toDoL.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos: {error.message}</p>;

  return (
    <div>
      <AddToDoComponent onAdd={addTodo} />
      <SearchInput search={search} onSearchChange={setSearch} />
      <ToDoTable todos={filteredTodos} onRemove={removeTodo} onEdit={editTodo} />
    </div>
  );
};

export default ToDoContainer;
