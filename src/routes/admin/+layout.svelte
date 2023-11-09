<script lang="ts">
  import { goto } from '$app/navigation';
  import { config } from '$lib/config';
  import { currentUser } from '$lib/stores/auth.store';
  import { Header, SideNav } from '$lib/components/admin';

  export let data;

  if ($currentUser?.role !== 'administrator') {
    goto('/');
  }
</script>

<svelte:head>
  <title>Admin | {config.app.name}</title>
</svelte:head>

<Header />

<div class="flex justify-between flex-1 w-full">
  <SideNav pathname={data.pathname} />
  <main class="w-full p-4">
    <slot />
  </main>
</div>
