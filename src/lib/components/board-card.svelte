<script>
  // @ts-nocheck

  export let item = { id: undefined };

  let edit = true;
</script>

<div class="board-card-header">
  {#if edit}
    <div
      class="board-card-title"
      contenteditable
      bind:textContent={item.title}
      on:blur={() => (edit = false)}
    >
      {item.title}
    </div>
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="board-card-title" on:click={() => (edit = true)}>
      {item.title}
    </div>
  {/if}
</div>

<div class="board-card-content">
  {#if item.subtitle}
    <div class="board-card-subtitle">{item.subtitle}</div>
  {/if}
  {#if item.avatar}
    <!-- content here -->
    <img class="board-card-avatar" src={item.avatar} alt={item.title} />
  {/if}
</div>

<style lang="postcss">
  .board-card-title {
    @apply px-4 pt-4 font-bold text-lg;
    outline: 0px solid transparent;
  }

  .board-card-content {
    @apply px-4;
  }

  .board-card-subtitle {
    @apply block font-normal text-base text-gray-500 mb-4;
  }

  .board-card-avatar {
    @apply rounded-full border-2 border-blue-500;
    width: 42px;
    height: auto;
    float: right;
  }
</style>
