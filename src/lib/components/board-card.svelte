<script>
  // @ts-nocheck
  import store from "$lib/store";

  export let item = { id: undefined };

  const toggleModal = () => {
    store.update((v) => {
      return {
        ...v,
        modal: !v.modal,
      };
    });
  };

  $: console.log($store.modal);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="board-card-header" on:click={toggleModal}>
  <!-- svelte-ignore missing-declaration -->
  <div class="board-card-title">
    {item.title}
  </div>
</div>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="board-card-content" on:click={toggleModal}>
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
