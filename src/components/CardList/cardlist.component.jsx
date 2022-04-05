import App from '../App/app.component';
import Card from '../Card/card.component';

const CardList = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map(user => {
        const { name, email, id } = user;
        return <Card key={id} props={{ name, email, id }} />;
      })}
    </div>
  );
};

export default CardList;
