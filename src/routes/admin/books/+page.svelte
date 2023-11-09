<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="text-2xl font-bold">Books</h1>
<ul>
  {#each data.books as book}
    <li>{book.title}</li>
  {/each}
</ul>
<a href="/">Go to Home</a>
