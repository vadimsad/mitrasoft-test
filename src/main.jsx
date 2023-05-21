import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.scss';
import AboutPage from './pages/AboutPage/index.jsx';
import AuthorPage from './pages/AuthorPage/index.jsx';
import PostsPage from './pages/PostsPage/index.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <PostsPage />,
			},
			{
				path: ':id',
				element: <AuthorPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
