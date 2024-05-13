function detectTriangle(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Input must be a number');
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Input must be a positive number');
  }
}

export default detectTriangle;
