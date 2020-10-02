import React, { useState } from 'react';
import './App.css';
import calculateSteps from '../../calculateSteps';

import Dropzone from '../Dropzone';
import Results from '../Results';

function App() {
  const [data, setData] = useState(undefined);
  let steps;
  let stats;

  if (data) {
    const results = calculateSteps(data);
    steps = results.steps;
    stats = results.stats;
  }

  return (
    <div className="App">
      <h1>Roomba Tracker</h1>
      <Dropzone setData={setData }/>
      {data && <hr />}
      {data && <Results steps={steps} stats={stats} />}
    </div>
  );
}

export default App;
