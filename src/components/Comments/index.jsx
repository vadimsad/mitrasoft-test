import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentsByPostId } from '../../redux/reducers/comments';

import Comment from '../Comment';

const Comments = ({ postId }) => {
	const { loading, comments } = useSelector(selectCommentsByPostId(postId));

	if (loading) {
		return <h5>Loading comments...</h5>;
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
