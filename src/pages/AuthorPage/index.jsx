import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Posts from '../../components/Posts';
import User from '../../components/User';
import { fetchUserAction, selectUserPosts } from '../../redux/reducers/user';

const AuthorPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserAction(id));
	}, [id]);

	return (
		<>
			<section className='mb-5'>
				<h2 className='fs-4'>Пользователь</h2>
				<User />
			</section>
			<section>
				<h2 className='fs-4'>Посты</h2>
				<Posts postsSelector={selectUserPosts} />
			</section>
		</>
	);
};

export default AuthorPage;
