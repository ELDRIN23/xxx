import React, { useState, useMemo } from 'react';
import CodeBlock from '../components/CodeBlock';
import { osPrograms } from '../data/osPrograms';
import { androidPrograms } from '../data/androidPrograms';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOS = useMemo(() => {
    return osPrograms.filter(prog => 
      prog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      prog.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredAndroid = useMemo(() => {
    return androidPrograms.filter(prog => 
      prog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      prog.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Resource Programs</h1>
        <input 
          type="text" 
          className="resources-search"
          placeholder="Search programs by title or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="section-title-res">OS Programs</h2>
      {filteredOS.length === 0 ? (
        <p>No OS programs matching search.</p>
      ) : (
        filteredOS.map(prog => (
          <CodeBlock key={prog.id} title={prog.title} code={prog.code} />
        ))
      )}

      <h2 className="section-title-res">Android Programs</h2>
      {filteredAndroid.length === 0 ? (
        <p>No Android programs matching search.</p>
      ) : (
        filteredAndroid.map(prog => (
          <CodeBlock key={prog.id} title={prog.title} code={prog.code} />
        ))
      )}
    </div>
  );
};

export default Resources;
