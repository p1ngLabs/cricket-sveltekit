<script lang="ts">
  import type { PageData } from './$types';
  import { config } from '$lib/config';
  import { Button } from '$lib/components/ui/button';

  export let data: PageData;
</script>

<svelte:head>
  <title>{config.app.name}</title>
  <meta name="description" content="A tiny Library and Bookstore in Hanoi" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
{#if data.user}
  <p>Hi {data.user.username}, please take a look around. Here's your profile:</p>
  <ul>
    <li>Email: {data.user.email}</li>
    <li>First name: {data.user.first_name}</li>
    <li>Last name: {data.user.last_name}</li>
    <li>Role: {data.user.role}</li>
  </ul>
  <form method="POST">
    <Button type="submit">Logout</Button>
  </form>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/admin/books">Go to books</a>
<a href="/account/authentication/log-in">Log In</a>
