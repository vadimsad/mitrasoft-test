import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCommentsByPostId } from '../../redux/reducers/comments';

import Comment from '../Comment';

const Comments = ({ postId }) => {
	const { loading, comments, error } = useSelector(selectCommentsByPostId(postId));

	if (loading) {
		return <Spinner className='d-flex mx-auto' animation='border' />;
	}

	if (error) {
		return <h6 className='text-danger'>{error}</h6>;
	}

	return (
		<ul className='p-0 mt-3' style={{ listStyle: 'none' }}>
			{comments.map(({ id, email, body }) => (
				<li key={id}>
					<Comment email={email} body={body} />
				</li>
			))}
		</ul>
	);
};

export default Comments;
