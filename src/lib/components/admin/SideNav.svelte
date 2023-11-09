<script lang="ts">
  import { LayoutDashboard, LibraryBig, Package, Users2, Settings, LogOut } from 'lucide-svelte';

  export let pathname: string;
</script>

<nav class="hidden sm:flex flex-col justify-between items-stretch w-28 shrink-0 border-r">
  <ul>
    <!-- TODO: refactor this to DRY -->
    <li class={pathname === '/admin/dashboard' ? 'border-r-4 border-gray-500' : 'opacity-40'}>
      <a href="/admin/dashboard" class="flex flex-col items-center px-2 py-4 font-bold"
        ><LayoutDashboard />Dashboard</a
      >
    </li>
    <li class={pathname === '/admin/books' ? 'border-r-4 border-gray-500' : 'opacity-40'}>
      <a href="/admin/books" class="flex flex-col items-center px-2 py-4 font-bold"
        ><LibraryBig />Books</a
      >
    </li>
    <li class={pathname === '/admin/orders' ? 'border-r-4 border-gray-500' : 'opacity-40'}>
      <a href="/admin/orders" class="flex flex-col items-center px-2 py-4 font-bold"
        ><Package />Orders</a
      >
    </li>
    <li class={pathname === '/admin/customers' ? 'border-r-4 border-gray-500' : 'opacity-40'}>
      <a href="/admin/customers" class="flex flex-col items-center px-2 py-4 font-bold"
        ><Users2 />Customers</a
      >
    </li>
    <li class={pathname === '/admin/settings' ? 'border-r-4 border-gray-500' : 'opacity-40'}>
      <a href="/admin/settings" class="flex flex-col items-center px-2 py-4 font-bold"
        ><Settings />Settings</a
      >
    </li>
  </ul>
  <a href="/auth/logout" class="flex justify-center w-full px-4 py-6">
    <LogOut />
  </a>
</nav>
