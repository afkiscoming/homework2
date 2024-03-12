import React from 'react';

const Home = ({ user }) => {
  return (
    <div>
      <h2>Welcome {user.name} {user.surname}</h2>
      <h2>Working pages: Home, Calendar, Admission, About &gt; About us &gt; About</h2>
    </div>
  );
};

export default Home;