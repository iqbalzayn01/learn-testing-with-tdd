/**
 * test scenarios for detectTriangle
 *
 * - detectTriangle function
 *   - should throw error when input is not a number
 *   - should throw error when input is not a positive number
 *   - should throw error when input is triangle inequality violation
 *   - should return "Segitiga Sama Sisi" when all input are equal
 *   - should return "Segitiga Sama Kaki" when two input are equal
 *   - should return "Segitiga Sembarang" when all input are different
 */

import { describe, it, expect } from 'vitest';
import detectTriangle from './detectTriangle';

describe('detectTriangle function', () => {
  it('should throw error when input is not a number', () => {
    expect(() => detectTriangle('a', 2, 3)).toThrowError(
      'Input must be a number'
    );
    expect(() => detectTriangle(1, 'b', 3)).toThrowError(
      'Input must be a number'
    );
    expect(() => detectTriangle(1, 2, 'c')).toThrowError(
      'Input must be a number'
    );
  });
});
