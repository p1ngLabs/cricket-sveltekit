<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Label } from '$lib/components/ui/label';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { config } from '$lib/config';
</script>

<svelte:head>
  <title>Sign up to {config.app.name}</title>
</svelte:head>

<Card.Root class="w-96">
  <Card.Header>
    <Card.Title tag="h1" class="text-2xl text-center font-bold uppercase">Sign Up</Card.Title>
  </Card.Header>
  <form method="POST">
    <Card.Content>
      <div class="grid w-full gap-3">
        <div class="flex flex-col space-y-1.5">
          <Label for="firstname" class="block"
            >First Name&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="text" name="firstname" placeholder="Please enter your firstname" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="lastname" class="block"
            >Last Name&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="text" name="lastname" placeholder="Please enter your lastname" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="username" class="block"
            >Username&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="text" name="username" placeholder="Please enter your username" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="email" class="block"
            >Email&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="email" name="email" placeholder="Please enter your email" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="password" class="block"
            >Password&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="password" name="password" placeholder="Please enter your password" />
        </div>
        <!-- <div class="flex flex-col space-y-1.5">
          <Label for="password-cf" class="block"
            >Confirm Password&nbsp;<span class="text-red-500 font-bold">*</span></Label
          >
          <Input type="password" name="password-cf" placeholder="Please enter your password" />
        </div> -->
      </div>
    </Card.Content>
    <Card.Footer>
      <Button type="submit" class="w-full">Sign Up</Button>
    </Card.Footer>
  </form>
</Card.Root>
