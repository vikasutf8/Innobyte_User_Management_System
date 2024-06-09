import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (name, email, password) => {
  try {
    const res = await axios.post('/api/auth/signup', { name, email, password });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/users/profile', {
      headers: {
        'x-auth-token': token,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
