import React from 'react';
import axios from 'axios';

const Home = () => {
	const User_URL = "http://127.0.0.1:8000/api/auth//user-profile";

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    let userData = {
    }
    console.log(userData);
    try {
      const response = await axios.post(User_URL, userData);
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.access_token;
      console.log(accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
	<div style={{
		paddingTop: '100px',
		boxSizing: 'content-box',
	  }}
	  containerStyle={{
		position: 'relative',
		overflow: 'visible'
	  }}>Welcome </div>
  )
}

export default Home