<script>
  // @ts-nocheck
  import ModalHeader from "$lib/components/modal-header.svelte";
  import Modal from "$lib/components/modal.svelte";
  import store from "$lib/store";
  import "../app.css";
</script>

<div class="wrapper">
  <slot />
</div>

<Modal bind:open={$store.modal}>
  <ModalHeader />
</Modal>

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
