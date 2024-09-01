import React from 'react';

function ChoiceSelector({ choices, selectedChoice, onChoiceChange }) {
  return (
    <div>
      <label>Select Choice:</label>
      <select value={selectedChoice} onChange={onChoiceChange}>
        {choices.map((choice, index) => (
          <option key={index} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChoiceSelector;
