import React from 'react';
import axios from 'axios';
import User from './User';
import Follower from './Follower';

class UserData extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/timbogdanov').then((res) => {
      this.setState({
        user: res.data,
      });
    });

    axios
      .get('https://api.github.com/users/timbogdanov/followers')
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      });
  }
  render() {
    return (
      <div>
        <User user={this.state.user} />

        {this.state.followers.map((follower) => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

export default UserData;
