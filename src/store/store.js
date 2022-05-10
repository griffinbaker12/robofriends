import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { searchReducer } from './reducers';
import { robotsReducer } from './reducers';

export const rootReducer = combineReducers({
  searchField: searchReducer,
  robots: robotsReducer,
});

export const store = createStore(rootReducer, undefined, undefined);
