<script>
  // @ts-nocheck
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import BoardCard from "./board-card.svelte";

  const flipDurationMs = 200;

  export let items = [];
  export let title = "";

  function handleSort(e) {
    items = e.detail.items;
  }
</script>

<div class="board">
  <div class="board-header">
    <div class="board-title">{title}</div>
    <button class="board-action">
      <span class="material-icons">settings</span>
    </button>
  </div>
  <div
    class="board-items"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleSort}
    on:finalize={handleSort}
  >
    {#each items as item (item.id)}
      <div
        key={item.id}
        animate:flip={{ duration: flipDurationMs }}
        class="board-card"
      >
        <BoardCard bind:item />
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .board {
    @apply shadow-lg bg-gray-50 flex flex-col;
    min-width: 250px;
    max-width: 250px;
    min-height: 200px;
    max-height: calc(100vh - 120px);
  }

  .board-header {
    @apply px-4 flex items-center bg-gray-200;
    min-height: 50px;
  }

  .board-title {
    @apply flex flex-1 font-bold;
  }

  .board-action {
    @apply cursor-pointer p-0;
    line-height: 0px;
  }

  .board-items {
    @apply flex justify-start flex-col gap-4 p-4 bg-gray-50 flex-1 overflow-y-auto;
  }

  .board-card {
    @apply bg-white shadow-lg rounded-lg cursor-pointer;
    min-height: 150px;
  }

  .board-card-title {
    @apply px-4 py-4 mb-2 font-semibold;
  }
</style>
