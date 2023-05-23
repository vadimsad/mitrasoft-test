import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Logo = () => {
	return (
		<Row>
			<Col className='d-flex align-items-center'>
				<div>
					<Image
						src='https://avatars.githubusercontent.com/u/35136145'
						roundedCircle
						alt='Profile photo'
						width='40px'
					/>
				</div>
			</Col>
			<Col>
				<h6 className='mb-0 text-primary' style={{ fontSize: '1rem', lineHeight: 1 }}>
					Вадим Садыков
				</h6>
				<span className='text-muted' style={{ fontSize: '0.9rem' }}>
					sadykovvt@gmail.com
				</span>
			</Col>
		</Row>
	);
};

export default Logo;
