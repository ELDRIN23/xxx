import React, { useState } from 'react';
import jsPDF from 'jspdf';
import programs from './programs.json';
import './index.css';

function App() {
  const [category, setCategory] = useState('java');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = programs[category].filter(prog => 
    prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prog.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadAllPDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(30, 41, 59);
    doc.text("Study Code Hub", margin, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("All Lab Programs (Java & PHP)", margin, yPos);
    yPos += 15;

    const categories = ['java', 'php'];
    
    categories.forEach((cat, catIdx) => {
      if (catIdx > 0) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(37, 99, 235); // Blue
      doc.text(`${cat.toUpperCase()} Programs`, margin, yPos);
      yPos += 12;

      programs[cat].forEach((prog) => {
        // Title block
        const titleText = `${prog.id}. ${prog.title}`;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(30, 41, 59);
        
        // Check if we need a new page for the title
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = 20;
        }
        
        doc.text(titleText, margin, yPos);
        yPos += 8;

        // Code block
        doc.setFont("courier", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        
        const splitCode = doc.splitTextToSize(prog.code, pageWidth - (2 * margin));
        const codeHeight = splitCode.length * 4;

        // If code block is too large for current page, start on new page
        // or break across pages (jsPDF.text handles array of lines)
        if (yPos + codeHeight > pageHeight - 15) {
          // If the first few lines don't fit, just start on new page
          if (yPos > pageHeight - 40) {
            doc.addPage();
            yPos = 20;
            doc.text(splitCode, margin, yPos);
            yPos += codeHeight + 12;
          } else {
            // Complex case: piece-by-piece or just let it flow?
            // jsPDF.text with array will overflow off page. 
            // Better to manually handle lines.
            splitCode.forEach(line => {
              if (yPos > pageHeight - 15) {
                doc.addPage();
                yPos = 20;
              }
              doc.text(line, margin, yPos);
              yPos += 4;
            });
            yPos += 8;
          }
        } else {
          doc.text(splitCode, margin, yPos);
          yPos += codeHeight + 12;
        }
      });
    });

    doc.save("All_Programs_CodeHub.pdf");
  };

  return (
    <div className="container">
      <header>
        <h1>Study Code Hub</h1>
        <p className="subtitle">Extracted Lab Programs for Quick Reference</p>
      </header>

      <div className="download-section">
        <button className="download-btn" onClick={downloadAllPDF}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Both (Java & PHP PDF)
        </button>
      </div>

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
