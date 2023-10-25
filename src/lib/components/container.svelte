<div class="kanban">
  <slot />
</div>

<style lang="postcss">
  .kanban {
    @apply flex py-4 px-4 items-start overflow-x-auto gap-4;
    height: calc(100vh - 60px);
    max-width: 100vw;
  }
</style>
