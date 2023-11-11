<script lang="ts">
  import { goto } from '$app/navigation';
  import * as Card from '$lib/components/ui/card';
  import { Label } from '$lib/components/ui/label';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { login } from '$lib/services/auth.service';
  import { currentUser } from '$lib/stores/auth.store';

  export let email = '';
  export let password = '';

  async function handleSubmit() {
    const user = await login({ email, password });
    if (user) currentUser.set(user);
    goto('/');
  }
</script>

<svelte:head>
  <title>Log in to Cricket</title>
</svelte:head>

<h2>Welcome, {$currentUser?.username}</h2>

<Card.Root class="w-96">
  <Card.Header>
    <Card.Title tag="h1" class="text-2xl text-center font-bold uppercase">Login</Card.Title>
  </Card.Header>
  <form method="POST" on:submit|preventDefault={handleSubmit}>
    <Card.Content>
      <div class="grid w-full gap-3">
        <div class="flex flex-col space-y-1.5">
          <Label for="email" class="block"
            >Email <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Please enter your email"
            bind:value={email}
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="password" class="block"
            >Password <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Please enter your password"
            bind:value={password}
          />
        </div>
        <a
          href="/account/authentication/forgot-password"
          class="text-xs ms-auto hover:underline hover:underline-offset-2">Forgot Password?</a
        >
      </div>
    </Card.Content>
    <Card.Footer>
      <Button type="submit" class="w-full">Log In</Button>
    </Card.Footer>
  </form>
</Card.Root>
