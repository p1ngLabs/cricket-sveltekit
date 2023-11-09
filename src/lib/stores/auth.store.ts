import { writable } from 'svelte/store';
import type { AuthenticatedUser } from '$lib/types';

export const currentUser = writable<AuthenticatedUser | null>(null);
