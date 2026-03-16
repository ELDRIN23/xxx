import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <div className="code-block-title">{title}</div>
        <button 
          className={`code-copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="code-area">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
