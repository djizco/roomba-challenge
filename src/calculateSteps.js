import * as R from 'ramda';

function calculateNextLocation(currentLocation, direction) {
  switch(direction) {
    case 'N':
      return [currentLocation[0], (currentLocation[1] + 1)];
    case 'S':
      return [currentLocation[0], (currentLocation[1] - 1)];
    case 'E':
      return [(currentLocation[0] + 1), currentLocation[1]];
    case 'W':
      return [(currentLocation[0] - 1), currentLocation[1]];
    default:
      return currentLocation;
  }
}

function checkForWall(location, dimensions) {
  // North Wall
  if (location[1] > dimensions[1]) {
    return true;
  // South Wall
  } else if (location[1] < 0) {
    return true;
  // East Wall
  } else if (location[0] > dimensions[0]) {
    return true;
  // West Wall
  } else if (location[0] < 0) {
    return true;
  }
  return false;
}

export default function calculateSteps({
  roomDimensions,
  initialRoombaLocation,
  dirtLocations,
  drivingInstructions,
}) {
  let dirtCollected = 0;
  let totalWallsHit = 0;
  let remainingDirtLocations = dirtLocations;
  let currentLocation = initialRoombaLocation;
  let step = 1;
  let distanceTraveled = 0;

  const initialStep = {
    step,
    location: initialRoombaLocation,
    action: null,
    dirtCollected,
    totalWallsHit,
  }

  const steps = [initialStep];

  function checkForDirt(position) {
    if (R.includes(position, remainingDirtLocations)) {
      const index = R.indexOf(position, remainingDirtLocations);
      remainingDirtLocations = R.remove(index, 1, remainingDirtLocations);
      dirtCollected++;
    }
  }

  drivingInstructions.forEach(instruction => {
    const nextLocation = calculateNextLocation(currentLocation, instruction)
    const wall = checkForWall(nextLocation, roomDimensions);
    step++;

    if (wall) {
      totalWallsHit++;

      steps.push({
        step,
        location: currentLocation,
        action: null,
        dirtCollected,
        totalWallsHit,
      });
    } else {
      currentLocation = nextLocation;
      distanceTraveled++;

      checkForDirt(nextLocation);

      steps.push({
        step,
        location: nextLocation,
        action: instruction,
        dirtCollected,
        totalWallsHit,
      });
    }
  });

  const stats = {
    finalPosition: currentLocation,
    dirtCollected,
    distanceTraveled,
    totalWallsHit,
  };

  return { steps, stats };
}
