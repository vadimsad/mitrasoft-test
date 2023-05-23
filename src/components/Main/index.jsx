import Container from 'react-bootstrap/Container';
import React from 'react';

const Main = ({ children }) => {
	return (
		<main className='h-100 flex-grow-1'>
			<Container>{children}</Container>
		</main>
	);
};

export default Main;
