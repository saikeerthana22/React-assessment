// src/components/CandidateForm.js
import React, { useState } from 'react';

const CandidateForm = ({ onSubmit }) => {
  const [candidate, setCandidate] = useState({
    name: '',
    skills: '',
    experience: '',
    location: '',
    technicalResults: '',
    codingResults: ''
  });

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(candidate);
    setCandidate({
      name: '',
      skills: '',
      experience: '',
      location: '',
      technicalResults: '',
      codingResults: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded">
      <div className="flex w-full px-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Candidate Name</label>
          <input
            type="text"
            name="name"
            value={candidate.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        

        <div className="w-full px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Candidate Skills</label>
          <input
            type="text"
            name="skills"
            value={candidate.skills}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
          <input
            type="number"
            name="experience"
            value={candidate.experience}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={candidate.location}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Technical Results (Rate out of 5)</label>
          <input
            type="text"
            name="videoResults"
            value={candidate.technicalResults}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Coding Results (Rate out of 5)</label>
          <input
            type="text"
            name="codingResults"
            value={candidate.codingResults}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default CandidateForm;
