import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/reducers/user';

const User = () => {
	const { content: userData, loading } = useSelector(selectUserData);

	if (loading) {
		return <Spinner className='d-flex mx-auto' animation='border' />;
	}

	const { name, email, phone, website, address } = userData;

	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<ul>
					{Object.keys(userData).map((propName) => {
						if (typeof userData[propName] !== 'object') {
							return (
								<li key={propName}>
									<h6 className='d-inline-block'>{propName}</h6>: {userData[propName]}
								</li>
							);
						}
					})}
				</ul>
			</Card.Body>
		</Card>
	);
};

export default User;
