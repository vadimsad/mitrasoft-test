import React from 'react';

const Post = ({ body, id, title, userId }) => {
	return (
		<>
			<h4>{title}</h4>
			<p>{body}</p>
		</>
	);
};

export default Post;
