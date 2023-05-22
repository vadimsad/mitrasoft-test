import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction, selectPostsData } from '../../redux/reducers/posts';
import Posts from '../../components/Posts';

const PostsPage = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(selectPostsData);

	useEffect(() => {
		dispatch(fetchPostsAction());
	}, []);

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<>
			<Posts />
		</>
	);
};

export default PostsPage;
