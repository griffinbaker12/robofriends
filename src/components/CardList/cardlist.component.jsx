import Card from '../Card/card.component';
import { useSelector } from 'react-redux';
import { selectRobots, selectSearchField } from '../../store/selectors';

const CardList = () => {
  const robots = useSelector(selectRobots);
  const searchField = useSelector(selectSearchField);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="cards-container">
      {filteredRobots.map(user => {
        const { name, email, id } = user;
        return <Card key={id} props={{ name, email, id }} />;
      })}
    </div>
  );
};

export default CardList;
