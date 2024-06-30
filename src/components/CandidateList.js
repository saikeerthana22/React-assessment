// src/components/CandidateList.js
import React from 'react';

const CandidateList = ({ candidates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {candidates.map(candidate => (
        <div key={candidate.id} className="p-4 border rounded shadow-md bg-gray-100">
          <h2 className="text-lg font-bold">{candidate.name}</h2>
          <p><strong>Skills:</strong> {candidate.skills}</p>
          <p><strong>Experience:</strong> {candidate.experience} years</p>
          <p><strong>Location:</strong> {candidate.location}</p>
          <p><strong>Technical Results:</strong> {candidate.technicalResults}</p>
          <p><strong>Coding Results:</strong> {candidate.codingResults}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
