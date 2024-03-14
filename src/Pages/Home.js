import React from 'react';

const Home = ({ user }) => {
  return (
    <div>
      <h2>Welcome {user.name} {user.surname}</h2>
    </div>
  );
};

export default Home;