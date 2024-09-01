import React from 'react';

function TopicSelector({ topics, selectedTopic, onTopicChange }) {
  return (
    <div>
      <label>Select Topic:</label>
      <select value={selectedTopic} onChange={onTopicChange}>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TopicSelector;
