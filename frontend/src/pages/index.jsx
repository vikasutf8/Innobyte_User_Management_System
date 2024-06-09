import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getProfile } from '../utils/auth';

const Index = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-center">Welcome {user ? user.name : 'Guest'}</h1>
      </div>
    </div>
  );
};

export default Index;
