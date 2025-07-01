import React, { useState } from 'react';
import './Vote.css';

function Vote() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="vote-container">
      <h1>React Voting App</h1>
      {languages.map((lang, index) => (
        <div key={index} className="vote-item">
          <span>{lang.name}: {lang.votes} votes</span>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default Vote;
