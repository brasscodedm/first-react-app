import React from 'react';
import './App.css';
import Users from './components/Users/Users';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>My first React/Redux App</h1>
				<Users />
			</header>
		</div>
	);
};

export default App;
