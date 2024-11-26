import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul className="user-list">
          {users.map((user) => (
            <UserCard key={user.id} user={user} deleteUser={deleteUser} />
          ))}
        </ul>
      ) : (
        <p>Користувачів не знайдено.</p>
      )}
    </div>
  );
};

export default UserList;
