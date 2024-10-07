import React, { useState } from 'react';

const AddToDoComponent = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState(''); // Стан для значення інпуту
  const [error, setError] = useState(null); // Стан для зберігання помилки

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('ToDo cannot be empty'); // Встановлюємо повідомлення про помилку
    } else {
      onAdd(inputValue); // Додаємо ToDo
      setInputValue(''); // Очищаємо інпут
      setError(null); // Очищаємо помилку після успішного додавання
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Виведення помилки */}
    </form>
  );
};

export default AddToDoComponent;
