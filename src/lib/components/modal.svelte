<script>
  export let open = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if open}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal-wrapper" on:click|stopPropagation={() => (open = false)}>
    <div class="modal">
      <slot />
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-backdrop" on:click|stopPropagation={() => (open = false)} />
{/if}

<style lang="postcss">
  .modal {
    @apply bg-white rounded-lg shadow-xl;
    width: 620px;
    min-height: 420px;
    max-height: 100vh;
  }

  .modal-wrapper {
    @apply absolute z-20 w-screen h-screen flex items-center justify-center top-0 bottom-0 right-0 left-0;
  }

  .modal-backdrop {
    @apply absolute z-10 w-screen h-screen bg-gray-950/80 top-0 bottom-0 right-0 left-0;
  }
</style>
