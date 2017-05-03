import axios from 'axios';

export const FETCH_ISSUES='FETCH_ISSUES';
export const CREATE_POST='CREATE_POST';
export const FETCH_POST='FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kamillaiscool';

export function fetchIssues() {
	const request = [
		{
			title: 'Stop the Ban',
			id: '1',
			description: 'I would like to indicate my opposition to President Trump\'s plan to build a wall on the southern border. I believe it is too costly and would like to see the funding used in a more trategic and useful manner. Furthermore, I believe it would be ineffective in substnatially diminishing the number of illegal immigrants and its real purpose if probably enriching Trump\'s construction contacts via government contracts.'
		},
		{
			title: 'Stop the Ban',
			id: '2',
			description: 'I would like to indicate my opposition to President Trump\'s plan to build a wall on the southern border. I believe it is too costly and would like to see the funding used in a more trategic and useful manner. Furthermore, I believe it would be ineffective in substnatially diminishing the number of illegal immigrants and its real purpose if probably enriching Trump\'s construction contacts via government contracts.'
		},
		{
			title: 'Stop the Ban',
			id: '3',
			description: 'I would like to indicate my opposition to President Trump\'s plan to build a wall on the southern border. I believe it is too costly and would like to see the funding used in a more trategic and useful manner. Furthermore, I believe it would be ineffective in substnatially diminishing the number of illegal immigrants and its real purpose if probably enriching Trump\'s construction contacts via government contracts.'
		},
		{
			title: 'Stop the Ban',
			id: '4',
			description: 'I would like to indicate my opposition to President Trump\'s plan to build a wall on the southern border. I believe it is too costly and would like to see the funding used in a more trategic and useful manner. Furthermore, I believe it would be ineffective in substnatially diminishing the number of illegal immigrants and its real purpose if probably enriching Trump\'s construction contacts via government contracts.'
		},
		{
			title: 'Stop the Ban',
			id: '5',
			description: 'I would like to indicate my opposition to President Trump\'s plan to build a wall on the southern border. I believe it is too costly and would like to see the funding used in a more trategic and useful manner. Furthermore, I believe it would be ineffective in substnatially diminishing the number of illegal immigrants and its real purpose if probably enriching Trump\'s construction contacts via government contracts.'
		}
	]

	return {
		type: FETCH_ISSUES,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	}
}

