import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectPostsData } from '../../redux/reducers/posts';
import Post from '../Post';

const Posts = () => {
	const { posts } = useSelector(selectPostsData);

	return (
		<div className='d-flex flex-column gap-3'>
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
