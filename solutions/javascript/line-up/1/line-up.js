//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let suffix;
  const lastTwo = number % 100;
  const lastOne = number % 10;

  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    suffix = 'th';
  } else if (lastOne === 1) {
    suffix = 'st';
  } else if (lastOne === 2) {
    suffix = 'nd';
  } else if (lastOne === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
