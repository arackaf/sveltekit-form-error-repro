import { invalid } from '@sveltejs/kit';

export const actions = {
	async save1({ request }) {
		console.log('SAVED, BABY');
	}
};
