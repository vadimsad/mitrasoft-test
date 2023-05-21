import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../api/api';
import { addPostsAction, fetchPostsAction } from '../../redux/reducers/posts';
import { Button } from 'react-bootstrap';

const PostsPage = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPostsAction());
	}, []);

	return <div>{posts.length}</div>;
};

export default PostsPage;
