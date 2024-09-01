import React, { useState } from 'react';
import SubjectSelector from './SubjectSelector';
import TopicSelector from './TopicSelector';
import ChoiceSelector from './ChoiceSelector';
import LevelSelector from './LevelSelector';

function QuestionBuilder() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('medium');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  // Example data, replace with your actual data
  const subjects = ['Math', 'Science', 'History'];
  const topics = ['Algebra', 'Biology', 'World War II'];
  const choices = ['Multiple Choice', 'True/False'];

  const handleGenerateQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/generate-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          subject: selectedSubject,
          topic: selectedTopic,
          choice: selectedChoice,
          difficulty: selectedLevel 
        })
      });

      const data = await response.json();
      setQuestion(data.question);
    } catch (error) {
      console.error('Error generating question:', error);
      setQuestion('Failed to generate question.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Automated Question Builder</h1>
      <SubjectSelector
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSubjectChange={(e) => setSelectedSubject(e.target.value)}
      />
      <TopicSelector
        topics={topics}
        selectedTopic={selectedTopic}
        onTopicChange={(e) => setSelectedTopic(e.target.value)}
      />
      <ChoiceSelector
        choices={choices}
        selectedChoice={selectedChoice}
        onChoiceChange={(e) => setSelectedChoice(e.target.value)}
      />
      <LevelSelector
        selectedLevel={selectedLevel}
        onLevelChange={(e) => setSelectedLevel(e.target.value)}
      />
      <button onClick={handleGenerateQuestion} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Question'}
      </button>
      {question && (
        <div>
          <h2>Generated Question:</h2>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionBuilder;
