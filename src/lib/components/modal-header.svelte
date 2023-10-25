<script>
  import { createEventDispatcher } from "svelte";

  export let title = "";

  const emit = createEventDispatcher();
</script>

<div class="modal-header">
  <div class="modal-header-title">
    {title}
  </div>
  <button class="modal-header-close" on:click={() => emit("close")}>
    <span class="material-icons">close</span>
  </button>
</div>

<style lang="postcss">
  .modal-header {
    @apply flex items-center p-4 bg-gray-50;
  }

  .modal-header-title {
    @apply font-bold flex-1;
  }

  .modal-header-close {
    @apply border-none bg-transparent;
  }
</style>
