import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const AuthorPage = () => {
	const { id } = useParams();

	useEffect(() => {}, [id]);

	return <div>Author</div>;
};

export default AuthorPage;
