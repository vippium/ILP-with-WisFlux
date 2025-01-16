import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ActivityFeed from './components/ActivityFeed';
import './App.css';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load persisted filter from localStorage on initial render
  useEffect(() => {
    const savedFilter = localStorage.getItem('selectedFilter') || '';
    setFilter(savedFilter);
  }, []);

  // Fetch activities for a given GitHub username
  const fetchActivities = async (username) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}/events`);
      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          setActivities([]);
          alert('No recent activity found for this user.');
        } else {
          setActivities(data);
        }
      } else if (response.status === 404) {
        alert('User not found. Please check the username and try again.');
        setActivities([]);
      } else {
        console.error('Error fetching activities');
        alert('Something went wrong. Please try again later.');
        setActivities([]);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
      setActivities([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle filter changes and persist them in localStorage
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    localStorage.setItem('selectedFilter', selectedFilter);
  };

  return (
    <div className="app">
      <h1>GitWatcher</h1>
      <SearchBar onSearch={fetchActivities} />
      <div className="filter-bar">
        <label htmlFor="filter">Filter by Type:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="PushEvent">Push Event</option>
          <option value="PullRequestEvent">Pull Request Event</option>
          <option value="IssuesEvent">Issues Event</option>
        </select>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ActivityFeed activities={activities} filter={filter} />
      )}
    </div>
  );
};

export default App;
