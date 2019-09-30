'use strict';

import reduce from '../author-reducer';

it('Creates a new Author', () => {
  const state = [];
  const data = {
    type: 'AUTHOR_CREATE',
    payload: 'John Milton',
  };
  const result = reduce(state, data);
  expect(result[0].name).toEqual('John Milton');
});

it('Updates an Existing Author', () => {
  const state = [];
  const data = {
    type: 'AUTHOR_CREATE',
    payload: 'Jon Milton',
  };

  const result = reduce(state, data);

  const updatedData = {
    type: 'AUTHOR_UPDATE',
    payload: {
      name: 'John Milton',
      id: result[0].id,
    },
  };

  const updatedResult = reduce(result, updatedData);

  expect(updatedResult[0].name).toEqual('John Milton');
});

it('Deletes an existing Author', () => {
  const state = [];
  const data = {
    type: 'AUTHOR_CREATE',
    payload: 'John Milton',
  };
  const result = reduce(state, data);

  const updatedData = {
    type: 'AUTHOR_DELETE',
    payload: result[0].id,
  };

  const updatedResult = reduce(result, updatedData);

  expect(updatedResult).toEqual([]);
});

it('Returns the current state if the type is not recognized', () => {
  const state = [];
  const data = {
    type: 'AUTHOR_NEW',
    payload: 'John Milton',
  };
  const result = reduce(state, data);
  expect(result).toEqual([]);
});
