import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
	const location = useLocation();
	const nav = useNavigate();

	console.log('localtion', location);

	const redirect = () => {
		const url = window.prompt('url giriniz') as string;

		nav(url);
	};

	return (
		<>
			Anasayfa
			<br></br>
			<button style={{ border: 1, color: 'blue' }} onClick={redirect}>
				Redirect
			</button>
		</>
	);
}

export default HomePage;

// uygulama açıldığında Home üzerinden çalışacak.
