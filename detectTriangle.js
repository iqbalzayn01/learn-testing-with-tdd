function detectTriangle(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Input must be a number');
  }
}

export default detectTriangle;
