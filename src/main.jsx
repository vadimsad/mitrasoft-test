import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import AboutPage from './pages/AboutPage/index.jsx';
import UserPage from './pages/UserPage/index.jsx';
import PostsPage from './pages/PostsPage/index.jsx';
import store from './redux/store.js';

import './index.scss';

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
				element: <UserPage />,
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
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
