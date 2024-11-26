import React from "react";

const SearchBar = ({ search, setSearch, getUsers }) => {
  return (
    <div className="controls">
      <button className="fetch-button" onClick={getUsers}>
        Завантажити користувачів
      </button>
      <input
        type="text"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
