import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand={'md'}>
				<Container>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement='start'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Меню</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-center flex-grow-1'>
								<Nav.Item>
									<LinkContainer to='/'>
										<Nav.Link as={NavLink} to='/'>
											Главная
										</Nav.Link>
									</LinkContainer>
								</Nav.Item>
								<Nav.Item>
									<LinkContainer to='/about'>
										<Nav.Link as={NavLink} to='/about'>
											Обо мне
										</Nav.Link>
									</LinkContainer>
								</Nav.Item>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
