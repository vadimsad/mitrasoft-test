import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsAction, selectPostsData } from '../../redux/reducers/posts';
import Posts from '../../components/Posts';

const PostsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPostsAction());
	}, []);

	return (
		<section className='mb-5'>
			<h1 className='fs-3 mb-3'>Все посты:</h1>
			<Posts postsSelector={selectPostsData} />
		</section>
	);
};

export default PostsPage;
