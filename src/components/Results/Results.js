import React from 'react';

import './Results.css';

import StepsTable from '../StepsTable';
import Stats from '../Stats'

export default function Results({ steps, stats }) {
  return (
    <div className="results">
      <h1>Results</h1>
      <StepsTable steps={steps} />
      <Stats {...stats} />
    </div>
  );
}
