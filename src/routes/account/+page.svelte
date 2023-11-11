<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { currentUser } from '$lib/stores/auth.store';

  if (browser) {
    if ($currentUser) {
      goto(`/account/${$currentUser.id}`);
    } else {
      goto('/account/authentication/log-in');
    }
  }
</script>
