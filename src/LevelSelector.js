import React from 'react';

function LevelSelector({ selectedLevel, onLevelChange }) {
  return (
    <div>
      <label>Select Difficulty Level:</label>
      <select value={selectedLevel} onChange={onLevelChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default LevelSelector;
