import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: payload });
    default:
      return state;
  }
};
