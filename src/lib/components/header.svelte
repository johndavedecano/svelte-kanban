<script>
  // @ts-nocheck

  export let title;
</script>

<div class="header">
  <div class="header-title">{title}</div>
  <div class="header-spacer" />
  <a class="header-link" href="/">Job Applicants</a>
  <a class="header-link" href="/tasks">Tasks</a>
</div>

<style lang="postcss">
  .header {
    @apply bg-purple-500 p-4 flex items-center gap-4;
    min-height: 60px;
  }

  .header-title {
    @apply text-white font-bold text-xl;
  }

  .header-spacer {
    @apply flex-1;
  }

  .header-link {
    @apply text-white bg-purple-950 px-4 py-2 rounded-lg;
    transition: all 200ms ease-in-out;
  }

  .header-link:hover {
    @apply bg-purple-800;
  }
</style>
