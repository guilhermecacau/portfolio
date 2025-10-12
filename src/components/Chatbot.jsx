import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const questions = [
    {
      question: 'Como posso te contactar?',
      answer: 'Dm gui_900 in discord.',
    },
    {
      question: 'Quais tecnologias você usa?',
      answer: 'Eu uso React, Node.js, Python e outras tecnologias modernas.',
    },
    {
      question: 'Onde posso ver seus projetos?',
      answer: 'Você pode ver meus projetos aqui no meu portfólio ou no meu GitHub.',
    },
  ];

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    const answer = questions.find((q) => q.question === question)?.answer;
    if (answer) {
      setMessages([
        ...messages,
        { text: question, sender: 'user' },
        { text: answer, sender: 'bot' },
      ]);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>Chatbot</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="chatbot-body">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-questions">
            {questions.map((q) => (
              <button key={q.question} onClick={() => handleQuestionSelect(q.question)}>
                {q.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
