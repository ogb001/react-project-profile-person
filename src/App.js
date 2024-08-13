import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer with experience in web development.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        <p>Component mounted {mountedTime} seconds ago</p>
      </div>
    );
  }
}

export default App;