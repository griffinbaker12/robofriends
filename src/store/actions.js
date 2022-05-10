import { ACTION_TYPES } from './constants';

export const setSearchField = text => ({
  type: ACTION_TYPES.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const setRobots = robots => ({
  type: ACTION_TYPES.UPDATE_ROBOTS,
  payload: robots,
});
