<script lang="ts">
  import { config } from '$lib/config';
  import { Header, SideNav } from '$lib/components/admin';
</script>

<svelte:head>
  <title>Admin | {config.app.name}</title>
</svelte:head>

<Header />

<div class="flex justify-between flex-1 w-full">
  <SideNav />
  <main class="w-full p-4 bg-cricket_gray">
    <slot />
  </main>
</div>
