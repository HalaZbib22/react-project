import React from 'react';

const Home = () => {
    const ttoken = JSON.parse(localStorage.getItem('token'));
	const userName = ttoken.user.name;
  return (
	<div style={{
		paddingTop: '100px',
		boxSizing: 'content-box',
	  }}
	  containerStyle={{
		position: 'relative',
		overflow: 'visible'
	  }}>Welcome {userName}</div>
  )
}

export default Home