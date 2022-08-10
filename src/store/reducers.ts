import { ACTION_TYPES } from './constants';

interface Search {
  searchField: string;
}

const initialStateSearch: Search = {
  searchField: '',
};

interface ActionObj {
  type: 'string';
  payload: 'object';
}

export const searchReducer = (
  state = initialStateSearch,
  action = {} as ActionObj
) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: payload });
    default:
      return state;
  }
};

interface Robot {
  name: string;
  email: string;
  id: number;
}

interface Robots {
  robots: Array<Robot>;
}

const initialStateRobots: Robots = {
  robots: [],
};

export const robotsReducer = (
  state = initialStateRobots,
  action = {} as ActionObj
) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.UPDATE_ROBOTS:
      return Object.assign({}, state, { robots: payload });
    default:
      return state;
  }
};
