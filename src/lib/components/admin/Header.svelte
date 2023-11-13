<script lang="ts">
  import { Menu } from 'lucide-svelte';
  import * as Avatar from '$lib/components/ui/avatar';
</script>

<header class="border-b">
  <div class="flex justify-between items-center px-4 py-2">
    <div class="flex items-center gap-2">
      <button class="sm:hidden">
        <Menu />
      </button>
      <a href="/" class="h-10 w-10">
        <img src="/images/logo-black-transparent.png" alt="Cricket Logo" />
      </a>
      <h1 class="font-bold text-2xl select-none">Cricket</h1>
    </div>
    <Avatar.Root>
      <Avatar.Image src="/images/avatar.png" alt="Admin avatar" />
      <Avatar.Fallback>Admin avatar</Avatar.Fallback>
    </Avatar.Root>
  </div>
</header>
