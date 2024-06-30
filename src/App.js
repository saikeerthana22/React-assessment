// src/App.js
import React, { useState } from 'react';
import CandidateForm from './components/CandidateForm';
import RecruiterSearch from './components/RecruiterSearch';

const App = () => {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (newCandidate) => {
    setCandidates([...candidates, { ...newCandidate, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Candidate Database</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Recruiter </h2>
          <RecruiterSearch candidates={candidates} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2"> Admin</h2>
          <CandidateForm onSubmit={addCandidate} />
        </div>
      </div>
    </div>
  );
};

export default App;
