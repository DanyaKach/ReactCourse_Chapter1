import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import Loading from "./components/Loading";
import { fetchUsers, deleteUserById } from "./fetchMethods";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); 

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    } catch (err) {
      setError("Не вдалося завантажити дані.");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = (id) => {
    const updatedUsers = deleteUserById(users, id);
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Список користувачів</h1>
      <SearchBar search={search} setSearch={setSearch} getUsers={getUsers} />
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      <UserList users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
