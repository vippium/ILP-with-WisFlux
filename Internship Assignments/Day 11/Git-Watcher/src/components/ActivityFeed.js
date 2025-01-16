import React from 'react';

const ActivityFeed = ({ activities, filter }) => {
  const filteredActivities = filter
    ? activities.filter((activity) => activity.type === filter)
    : activities;

  if (!filteredActivities || filteredActivities.length === 0) {
    return <p>No activities to display for the selected filter.</p>;
  }

  return (
    <div className="activity-feed">
      {filteredActivities.map((activity, index) => (
        <div key={index} className="activity-item">
          <p><strong>Type:</strong> {activity.type}</p>
          <p><strong>Repo:</strong> {activity.repo.name}</p>
          <p><strong>Time:</strong> {new Date(activity.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
