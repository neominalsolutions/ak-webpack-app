import React from 'react';
import { Link, NavLink } from 'react-router-dom';

type HeaderProps = {
	children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
	return (
		<div
			style={{
				margin: 0,
				position: 'relative',
				top: 0,
				padding: '1rem',
				background: 'yellow',
				color: 'white',
				minHeight: '10vh',
				minWidth: '100vw',
			}}
		>
			<Link to="/">Anasayfa</Link>{' '}
			<Link to="/query?search=test&lang=tr">Query Strings</Link>{' '}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="/params/1"
			>
				Route params
			</NavLink>{' '}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="/admin"
			>
				Admin
			</NavLink>{' '}
			<NavLink
				className={({ isActive }) => (isActive ? 'active-link' : '')}
				to="/admin/users"
			>
				Users
			</NavLink>
			{children && <p>{children}</p>}
		</div>
	);
}

export default Header;
