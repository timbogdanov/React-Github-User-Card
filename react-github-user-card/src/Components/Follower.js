import React from 'react';

const Followers = (props) => {
  return (
    <div className='follower'>
      <h3>{props.follower.login}</h3>
    </div>
  );
};

export default Followers;
