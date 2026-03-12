import React, { useState } from 'react';
import programs from './programs.json';
import './index.css';

function App() {
  const [category, setCategory] = useState('java');

  return (
    <div className="container">
      <header>
        <h1>Study Code Hub</h1>
        <p className="subtitle">Extracted Lab Programs for Quick Reference</p>
      </header>

      <div className="tabs">
        <button 
          className={`tab-btn ${category === 'java' ? 'active' : ''}`}
          onClick={() => setCategory('java')}
        >
          Java Programs
        </button>
        <button 
          className={`tab-btn ${category === 'php' ? 'active' : ''}`}
          onClick={() => setCategory('php')}
        >
          PHP Programs
        </button>
      </div>

      <div className="program-list">
        {programs[category].map((prog, index) => (
          <ProgramCard key={`${category}-${index}`} program={prog} />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(program.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="program-card">
      <div className="card-header">
        <h2>{program.id}. {program.title}</h2>
        <span className="badge">{program.code.includes('<?php') ? 'PHP' : 'Java'}</span>
      </div>
      <div className="code-container">
        <button 
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Code
            </>
          )}
        </button>
        <pre>
          <code>{program.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
