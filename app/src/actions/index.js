/*
 * action types
 */

// INPUTS
export const ONE_TWO_THREE = 'ONE_TWO_THREE';

export const someFunction = (test) => {
  return {
    type: ONE_TWO_THREE,
    test
  };
};
