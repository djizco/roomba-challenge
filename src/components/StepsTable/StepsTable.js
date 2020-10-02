import React from 'react';
import PropTypes from 'prop-types';

import './StepsTable.css';

export default function StepsTable({ steps }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Roomba Location</th>
          <th>Action</th>
          <th>Total Dirt Collected</th>
          <th>Total Wall Hits</th>
        </tr>
      </thead>
      <tbody>
        {steps.map(({ step, location, action, dirtCollected, totalWallsHit }) => (
          <tr key={step}>
            <td>{step}</td>
            <td>{location[0]}, {location[1]}</td>
            <td>{action}</td>
            <td>{dirtCollected}</td>
            <td>{totalWallsHit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

StepsTable.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    step: PropTypes.number,
    location: PropTypes.arrayOf(PropTypes.number),
    action: PropTypes.string,
    dirtCollected: PropTypes.number,
    totalWallsHit: PropTypes.number,
  })),
};

StepsTable.defaultProps = {
  steps: [],
};
