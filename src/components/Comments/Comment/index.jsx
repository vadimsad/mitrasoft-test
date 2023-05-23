import React from 'react';

const Comment = ({ email, body }) => {
	return (
		<>
			<h6>{email}</h6>
			<p>{body}</p>
		</>
	);
};

export default Comment;
