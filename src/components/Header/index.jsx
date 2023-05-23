import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from './Logo';

const Header = () => {
	return (
		<header className='mb-3'>
			<Navbar bg='light' expand={'md'}>
				<Container>
					<LinkContainer to='/about'>
						<Navbar.Brand as={NavLink} to='/about'>
							<Logo />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement='start'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title
								id={`offcanvasNavbarLabel-expand-md`}
								className='text-decoration-none'
								as={NavLink}
								to='/about'
							>
								<Logo />
							</Offcanvas.Title>
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
