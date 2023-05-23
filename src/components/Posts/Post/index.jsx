import React, { useState } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsAction, selectCommentsByPostId } from '../../../redux/reducers/comments';
import { Link } from 'react-router-dom';

import Comments from '../../Comments';

const Post = ({ body, id, title, userId }) => {
	const commentsData = useSelector(selectCommentsByPostId(id));
	const loading = commentsData?.loading;
	const dispatch = useDispatch();

	const [showComments, setShowComments] = useState(false);

	const loadComments = () => {
		// Если комментарии этого поста еще не были загружены
		if (!commentsData) {
			dispatch(fetchCommentsAction(id));
		}

		// Если была ошибка загрузки комментариев и комментарии скрыты, то пробуем получить их еще раз
		if (commentsData?.error && !showComments) {
			dispatch(fetchCommentsAction(id));
		}

		setShowComments((prev) => !prev);
	};

	return (
		<>
			<Card>
				<Card.Body className='d-md-flex d-block gap-3'>
					<Link to={`/${userId}`} className='h-100 d-inline-block'>
						<Image
							src='https://www.tiger-site.com/wp-content/tiger-files/placeholder.png'
							width='100px'
							style={{ objectFit: 'contain', alignSelf: 'flex-start' }}
						/>
					</Link>
					<div>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{body}</Card.Text>
						<Button onClick={loadComments} disabled={loading} size='sm'>
							Комментарии
						</Button>
						{showComments && <Comments postId={id} />}
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Post;
