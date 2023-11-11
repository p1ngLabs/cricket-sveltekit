<script lang="ts">
  import { currentUser } from '$lib/stores/auth.store';
  import { Button } from '$lib/components/ui/button';
  import { logout } from '$lib/services/auth.service';

  async function handleLogout() {
    await logout();
    currentUser.set(null);
  }
</script>

<h1>Welcome to SvelteKit</h1>
{#if $currentUser}
  <p>Hi {$currentUser.username}, please take a look around. Here's your profile:</p>
  <ul>
    <li>Email: {$currentUser.email}</li>
    <li>First name: {$currentUser.first_name}</li>
    <li>Last name: {$currentUser.last_name}</li>
    <li>Role: {$currentUser.role}</li>
  </ul>
  <Button on:click={handleLogout}>Logout</Button>
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/admin/books">Go to books</a>
<a href="/account/authentication/log-in">Log In</a>
