import React from 'react';
import './App.css';
import './App.Sass.scss';
import courseAdminImage from '../assets/images/CourseAdmin.png';

const App = () => {
	return (
		<div className="app app2">
			Hello
			<img src={courseAdminImage} />
		</div>
	);
};

export default App;
