import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<div className='d-flex flex-column'>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
