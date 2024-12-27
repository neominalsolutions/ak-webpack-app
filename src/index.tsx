// React uygulamayı boostrapt edeceğimiz kod burada olacak.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Layout from './layouts/layout';
import RouteParamsPage from './pages/route.params.page';
import QueryStringPage from './pages/querystring.page';
import HomePage from './pages/home.page';
// import App from './components/App';
import './style.css';
import AuthGuard from './guards/auth.guard';

// uygulamanın çalıştığı root element
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '',
		Component: Layout,
		children: [
			{
				path: '',
				Component: HomePage,
			},
			{
				path: '/home',
				Component: HomePage,
			},
			{
				path: '/params/:id', // dinamik route path
				Component: RouteParamsPage,
			},
			{
				path: '/query', // query?search=test&name=ali
				Component: QueryStringPage,
			},
		],
	},
	{
		path: '/admin',
		element: (
			<AuthGuard>
				<>
					Admin Dashboard
					<Outlet />
					{/* Admin Layout */}
				</>
			</AuthGuard>
		),
		children: [
			{
				path: 'users', // /admin/users
				element: (
					<>
						<hr></hr>Admin USers
					</>
				),
			},
		],
	},
	{
		path: '/login',
		element: <>Login Page</>,
	},
	{
		path: '*',
		element: <>404 Sayfa Bulunamadı</>,
	},
]);

// root.render hangi component load olacağını
root.render(<RouterProvider router={router} />);
