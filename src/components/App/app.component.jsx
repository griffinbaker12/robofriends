import CardList from '../CardList/cardlist.component';
import SearchBox from '../SearchBox/searchbox.component';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRobots } from '../../store/actions';
import { selectRobots, selectSearchField } from '../../store/selectors';
import Scroll from '../Scroll/scroll.component';
import ErrorBoundary from '../Error Boundary/errorboundary.component';
import './app.css';
import { click } from '@testing-library/user-event/dist/click';

const App = () => {
  const robots = useSelector(selectRobots);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch(setRobots(users)));
  }, []);

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc ">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <ErrorBoundary>
        <Scroll>
          <CardList />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

export default App;
