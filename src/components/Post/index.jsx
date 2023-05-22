import React from 'react';
import { Card, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = ({ body, id, title, userId }) => {
	return (
		<>
			<Card>
				<Card.Body style={{ display: 'flex', gap: '15px' }}>
					<Image
						src='https://www.tiger-site.com/wp-content/tiger-files/placeholder.png'
						width='100px'
						style={{ objectFit: 'contain', alignSelf: 'flex-start' }}
					/>
					<div>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{body}</Card.Text>
						<Button size='sm'>Комментарии</Button>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Post;
