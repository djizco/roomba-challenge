import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';

export default function Stats({
  dirtCollected,
  finalPosition,
  distanceTraveled,
  totalWallsHit,
}) {
  console.log('position:', finalPosition);
  return (
    <div className="stats">
      <p>Final Position: {finalPosition[0]}, {finalPosition[1]}</p>
      <p>Total Dirt Collected: {dirtCollected}</p>
      <p>Total Distance Traveled: {distanceTraveled}</p>
      <p>Total Walls Hit: {totalWallsHit}</p>
    </div>
  );
}

Stats.propTypes = {
  dirtCollected: PropTypes.number.isRequired,
  finalPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  distanceTraveled: PropTypes.number.isRequired,
  totalWallsHit: PropTypes.number.isRequired,
};
