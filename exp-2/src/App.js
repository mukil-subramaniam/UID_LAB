import React from 'react';
import UserProfile from './Components/UserProfile';

const userData = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  bio: 'A passionate developer and tech enthusiast.',
  profilePicture: 'https://cdn-icons-png.flaticon.com/512/3106/3106773.png',
  phone: '123-456-7890',
  address: '123 Main Street, Hometown, USA',
  socialMedia: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/janedoe' },
    { platform: 'Twitter', url: 'https://twitter.com/janedoe' },
    { platform: 'GitHub', url: 'https://github.com/janedoe' }
  ]
};

const App = () => {
  return (
    <div className="app">
      <UserProfile user={userData} />
    </div>
  );
};

export default App;
