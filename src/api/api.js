import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api = {
	async getPosts() {
		return instance.get('posts');
	},
};
