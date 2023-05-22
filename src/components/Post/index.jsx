import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCommentsAction,
	selectCommentsByPostId,
	selectCommentsData,
} from '../../redux/reducers/comments';

const Post = ({ body, id, title, userId }) => {
	const commentsData = useSelector(selectCommentsByPostId(id));
	const loading = commentsData?.loading;
	const dispatch = useDispatch();

	const showComments = () => {
		dispatch(fetchCommentsAction(id));
	};

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
						<Button onClick={showComments} disabled={loading} size='sm'>
							Комментарии
						</Button>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Post;
