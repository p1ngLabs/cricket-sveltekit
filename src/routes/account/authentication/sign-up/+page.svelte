<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Label } from '$lib/components/ui/label';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { register } from '$lib/services/auth.service';
  import { currentUser } from '$lib/stores/auth.store';

  export let firstname = '';
  export let lastname = '';
  export let username = '';
  export let email = '';
  export let password = '';

  async function handleSubmit() {
    const user = await register({ firstname, lastname, username, email, password });
    if (user) currentUser.set(user);
  }
</script>

<svelte:head>
  <title>Sign up to Cricket</title>
</svelte:head>

<h2>Welcome, {$currentUser?.username}</h2>

<Card.Root class="w-96">
  <Card.Header>
    <Card.Title tag="h1" class="text-2xl text-center font-bold uppercase">Sign Up</Card.Title>
  </Card.Header>
  <form method="POST" on:submit|preventDefault={handleSubmit}>
    <Card.Content>
      <div class="grid w-full gap-3">
        <div class="flex flex-col space-y-1.5">
          <Label for="firstname" class="block"
            >First Name <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Please enter your firstname"
            bind:value={firstname}
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="lastname" class="block"
            >Last Name <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Please enter your lastname"
            bind:value={lastname}
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="username" class="block"
            >Username <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Please enter your username"
            bind:value={username}
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="email" class="block"
            >Email <span class="text-red-500 font-bold">*</span></Label
          >
          <Input
            type="email"
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
      </div>
    </Card.Content>
    <Card.Footer>
      <Button type="submit" class="w-full">Sign Up</Button>
    </Card.Footer>
  </form>
</Card.Root>
