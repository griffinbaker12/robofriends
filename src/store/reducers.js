import { ACTION_TYPES } from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchReducer = (state = initialStateSearch, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
};

export const robotsReducer = (state = initialStateRobots, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.UPDATE_ROBOTS:
      return Object.assign({}, state, { robots: payload });
    default:
      return state;
  }
};
