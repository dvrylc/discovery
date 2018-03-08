// External imports
import { distanceInWordsStrict } from 'date-fns';

const timeProcessor = t => {
  let distance = distanceInWordsStrict(Date.now(), t * 1000);

  // Shorten strings
  distance = distance.replace(/ minutes?/g, 'm');
  distance = distance.replace(/ hours?/g, 'h');
  distance = distance.replace(/ days?/g, 'd');

  return distance;
}

export default timeProcessor;
