import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const api = {
	async getPosts() {
		await delay(1000);
		return instance.get('posts');
	},
	async getPostComments(postId) {
		await delay(1000);
		return instance.get(`/posts/${postId}/comments`);
	},
};
