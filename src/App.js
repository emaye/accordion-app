import React, { useState } from "react";
import "./App.css";

// Sample data for the Accordion
const questions = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "What are components?",
    content: "Components are the building blocks of React applications."
  },
  {
    id: 3,
    title: "What is state in React?",
    content: "State is an object that determines how components render and behave."
  },
  {
    id: 4,
    title: "What are props?",
    content: "Props are inputs to a React component that allow data to flow from parent to child."
  }
];

// Accordion Component
const Accordion = ({ questions }) => {
  const [activeId, setActiveId] = useState(null); // Track the currently open section

  // Handle section toggle
  const toggleSection = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id)); // Toggle section
  };

  return (
    <div className="accordion">
      {questions.map((question) => (
        <div key={question.id} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection(question.id)}
          >
            <h3>{question.title}</h3>
            <span>{activeId === question.id ? "-" : "+"}</span>
          </div>
          {activeId === question.id && (
            <div className="accordion-content">
              <p>{question.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion questions={questions} />
    </div>
  );
};

export default App;
