const Card = ({ props: { name, email, id } }) => {
  return (
    <div className="cards tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robot"
        className="card-image"
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div className="card-text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
