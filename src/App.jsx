import React, { useState } from 'react';
import programs from './programs.json';
import './index.css';

function App() {
  const [category, setCategory] = useState('java');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = programs[category].filter(prog => 
    prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prog.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>Study Code Hub</h1>
        <p className="subtitle">Extracted Lab Programs for Quick Reference</p>
      </header>

      <div className="search-container">
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input 
          type="text" 
          className="search-input" 
          placeholder={`Search ${category} programs...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="tabs">
        <button 
          className={`tab-btn ${category === 'java' ? 'active' : ''}`}
          onClick={() => { setCategory('java'); setSearchTerm(''); }}
        >
          Java Programs
        </button>
        <button 
          className={`tab-btn ${category === 'php' ? 'active' : ''}`}
          onClick={() => { setCategory('php'); setSearchTerm(''); }}
        >
          PHP Programs
        </button>
      </div>

      <div className="program-list">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog, index) => (
            <ProgramCard key={`${category}-${index}`} program={prog} />
          ))
        ) : (
          <div className="no-results">
            <h3>No programs found</h3>
            <p>Try searching for a different keyword or check your spelling.</p>
          </div>
        )}
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
