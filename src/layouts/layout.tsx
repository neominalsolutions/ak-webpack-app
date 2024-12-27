import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import App from '../components/App';
import Footer from '../components/footer';

function Layout() {
	return (
		<>
			{/* Headers */}
			<Header>
				{/* <App /> */}
				<p>Slogan</p>
				{/* children */}
			</Header>

			{/* Main Content */}
			<main style={{ padding: 5 }}>
				<Outlet />
				{/* aoutlet gelen componentler route dosyasında rotalanan componentler */}
			</main>

			<Footer />
			{/* Footers */}
		</>
	);
}

export default Layout;
