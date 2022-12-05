import { invalid } from '@sveltejs/kit';

export const actions = {
	async save1({ request }) {
		throw new Error('Bad');
	},
	async save2({ request }) {
		return invalid(500);
	}
};
