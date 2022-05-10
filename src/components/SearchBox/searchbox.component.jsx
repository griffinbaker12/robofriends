import { setSearchField } from '../../store/actions';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(setSearchField(e.target.value));
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
