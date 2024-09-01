import React from 'react';

function SubjectSelector({ subjects, selectedSubject, onSubjectChange }) {
  return (
    <div>
      <label>Select Subject:</label>
      <select value={selectedSubject} onChange={onSubjectChange}>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SubjectSelector;
