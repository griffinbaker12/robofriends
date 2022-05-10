import CardList from '../CardList/cardlist.component';
import SearchBox from '../SearchBox/searchbox.component';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchField } from '../../store/actions';
import { selectSearchField } from '../../store/selectors';
import Scroll from '../Scroll/scroll.component';
import ErrorBoundary from '../Error Boundary/errorboundary.component';
import './app.css';
import { click } from '@testing-library/user-event/dist/click';

const App = () => {
  const dispatch = useDispatch();
  const searchField = useSelector(selectSearchField);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const handleChange = e => {
    dispatch(setSearchField(e.target.value));
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc ">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={handleChange} />
      <ErrorBoundary>
        <Scroll>
          <CardList data={filteredRobots} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

export default App;
