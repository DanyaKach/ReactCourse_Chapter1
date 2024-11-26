import React from "react";

const UserCard = ({ user, deleteUser }) => {
  return (
    <li className="user-card">
      <img src={user.avatar} alt={user.first_name} className="user-avatar" />
      <div className="user-info">
        <p className="user-name">
          {user.first_name} {user.last_name}
        </p>
        <p className="user-email">{user.email}</p>
        <button
          className="delete-button"
          onClick={() => deleteUser(user.id)}
        >
          Видалити
        </button>
      </div>
    </li>
  );
};

export default UserCard;
