import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from '../Post';

const Posts = ({ postsSelector }) => {
	const { content, loading, error } = useSelector(postsSelector);

	if (loading) {
		return <Spinner className='d-flex mx-auto' animation='border' />;
	}

	if (error) {
		return <h6 className='text-danger'>{error}</h6>;
	}

	if (content.length === 0) {
		return <h6 className='text-danger'>Посты не найдены :(</h6>;
	}

	return (
		<div className='d-flex flex-column gap-3'>
			{content.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
