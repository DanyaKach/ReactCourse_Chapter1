import React, { useState } from 'react';

const ToDoTable = ({ todos, onRemove, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

const ToDoItem = ({ todo, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // Перевіряємо, чи редагуємо ми ToDo
  const [editValue, setEditValue] = useState(todo.title); // Поточне значення ToDo для редагування
  const [error, setError] = useState(null); // Стан для повідомлення про помилку

  // Обробляємо збереження відредагованого значення
  const handleSave = () => {
    if (editValue.trim() === '') {
      setError('ToDo cannot be empty'); // Якщо значення пусте, виводимо помилку
    } else {
      setError(null); // Скидаємо помилку, якщо є правильне значення
      setIsEditing(false); // Вихід з режиму редагування
      onEdit(todo.id, editValue); // Оновлюємо ToDo
    }
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Виведення помилки */}
          </>
        ) : (
          todo.title
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onRemove(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ToDoTable;
