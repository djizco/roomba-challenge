import React from 'react';
import PropTypes from 'prop-types';

import calculateSteps from './calculateSteps';

export default function Results({
  roomDimensions,
  initialRoombaLocation,
  dirtLocations,
  drivingInstructions,
}) {
  const [steps, stats] = calculateSteps(roomDimensions, initialRoombaLocation, dirtLocations, drivingInstructions);

  return (
    <div>Results</div>
  );
}

Results.propTypes = {
  roomDimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
  initialRoombaLocation: PropTypes.arrayOf(PropTypes.number).isRequired,
  dirtLocations: PropTypes.arrayOf(PropTypes.array).isRequired,
  drivingInstructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Results.defaultProps = {
  roomDimensions: [],
  initialRoombaLocation: [],
  dirtLocations: [],
  drivingInstructions: [],
};
