import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Posts from '../../components/Posts';
import User from '../../components/User';
import { fetchUserAction, selectUserPosts } from '../../redux/reducers/user';
import { Button } from 'react-bootstrap';

const UserPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserAction(id));
	}, [id]);

	const goToPrevPage = () => {
		navigate(-1);
	};

	return (
		<>
			<Button variant='link' onClick={goToPrevPage}>
				Назад
			</Button>
			<section className='mb-5'>
				<h2 className='fs-4'>Пользователь</h2>
				<User />
			</section>
			<section className='mb-5'>
				<h2 className='fs-4'>Посты</h2>
				<Posts postsSelector={selectUserPosts} />
			</section>
		</>
	);
};

export default UserPage;
