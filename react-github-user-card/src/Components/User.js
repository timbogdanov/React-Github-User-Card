import React from 'react';
import axios from 'axios';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/timbogdanov').then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    return <> </>;
  }
}

export default User;
