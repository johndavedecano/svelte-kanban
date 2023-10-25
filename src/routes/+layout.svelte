<script>
  // @ts-nocheck
  import "../app.css";
</script>

<div class="wrapper">
  <slot />
</div>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Icons"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
</svelte:head>

<style lang="postcss">
  .wrapper {
    @apply flex bg-gray-100 w-screen h-screen flex-col;
  }
</style>
