import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectPostsData } from '../../redux/reducers/posts';
import Post from '../Post';

const Posts = () => {
	const { posts } = useSelector(selectPostsData);

	return (
		<Row style={{ flexDirection: 'column', gap: '15px' }}>
			{posts.map((post) => (
				<Post {...post} key={post.id} />
			))}
		</Row>
	);
};

export default Posts;
