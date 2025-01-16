import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSearch = () => {
    if (username.trim() !== '') {
      onSearch(username);
      const updatedHistory = [username, ...history.filter((item) => item !== username)];
      setHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
  };

  const handleAutocomplete = (value) => {
    setUsername(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        list="history"
      />
      <datalist id="history">
        {history.map((item, index) => (
          <option key={index} value={item} onClick={() => handleAutocomplete(item)}>
            {item}
          </option>
        ))}
      </datalist>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
