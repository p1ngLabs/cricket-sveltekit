import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const ssr = false;

export const load: LayoutServerLoad = ({ locals }) => {
  if (locals.user?.role !== 'administrator') throw redirect(307, '/');
};
