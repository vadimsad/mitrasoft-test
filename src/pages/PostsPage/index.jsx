import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction, selectPostsData } from '../../redux/reducers/posts';
import Posts from '../../components/Posts';
import { Spinner } from 'react-bootstrap';

const PostsPage = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(selectPostsData);

	useEffect(() => {
		dispatch(fetchPostsAction());
	}, []);

	if (loading) {
		return <Spinner className='d-flex mx-auto' animation='border' />;
	}

	return (
		<section>
			<h1 className='fs-2'>Все посты:</h1>
			<Posts />
		</section>
	);
};

export default PostsPage;
