import React, { useState } from 'react';
import './App.css';

import Dropzone from '../Dropzone';
import Results from '../Results';

function App() {
  const [data, setData] = useState(undefined);

  return (
    <div className="App">
      <h1>Roomba Tracker</h1>
      <Dropzone setData={setData }/>
      {data && <hr />}
      {data && <h1>Results</h1>}
      {data && <Results {...data} />}
    </div>
  );
}

export default App;
