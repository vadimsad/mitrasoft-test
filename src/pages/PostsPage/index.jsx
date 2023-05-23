import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction, selectPostsData } from '../../redux/reducers/posts';
import Posts from '../../components/Posts';
import { selectUserData } from '../../redux/reducers/user';

const PostsPage = () => {
	const { content } = useSelector(selectPostsData);
	const userData = useSelector(selectUserData);
	const dispatch = useDispatch();

	useEffect(() => {
		if (content.length !== 0) return;
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
