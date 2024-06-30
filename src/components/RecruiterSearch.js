// src/components/RecruiterSearch.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
//import CandidateList from './components/CandidateList.js';
import CandidateList from './CandidateList.js';
import '../chartSetup'; // Import the chart setup


const RecruiterSearch = ({ candidates }) => {
  const [search, setSearch] = useState('');
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.skills.toLowerCase().includes(search.toLowerCase()) + 
    candidate.name.toLowerCase().includes(search.toLowerCase()) +
    candidate.location.toLowerCase().includes(search.toLowerCase())
  );

  const data = {
    labels: filteredCandidates.map(candidate => candidate.name),
    datasets: [
      {
        label: 'Years of Experience',
        data: filteredCandidates.map(candidate => candidate.experience),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // const datalocation = {
  //   labels1: filteredCandidates.map(candidate => candidate.name),
  //   datasets: [
  //     {
  //       label: '',
  //       data: filteredCandidates.map(candidate => candidate.location),
  //       backgroundColor: 'rgba(75, 192, 192, 0.6)',
  //     },
  //   ],
  // };

  return (
    <div className="space-y-4 p-4 bg-white shadow-md rounded">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="border p-2 rounded w-full"
        placeholder="Search by name/skills/location.."
      />
      <CandidateList candidates={filteredCandidates} />
      <div className="mt-4">
        <Bar data={data} />
        {/* <Bar datalocation={data} /> */}
      </div>
    </div>
  );
};

export default RecruiterSearch;
