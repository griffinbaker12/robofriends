import CardList from '../CardList/cardlist.component';
import SearchBox from '../SearchBox/searchbox.component';
import { Component } from 'react';
import Scroll from '../Scroll/scroll.component';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ searchfield: input });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc ">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.handleChange} />
        <Scroll>
          <CardList data={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
