<script>
  // @ts-nocheck

  import Board from "$lib/components/board.svelte";
  import "../app.css";

  let backlogs = [
    {
      id: 1,
      title: "Fix Padding Bug",
    },
    {
      id: 2,
      title: "Update minimum height",
    },
  ];

  let progress = [
    {
      id: 3,
      title: "Increase Memory Allocation",
    },
    {
      id: 4,
      title: "Fix webhook issue",
    },
  ];

  let failed = [
    {
      id: 5,
      title: "Fix Padding Bug",
    },
    {
      id: 6,
      title: "Update minimum height",
    },
  ];

  let testing = [
    {
      id: 7,
      title: "Add to cart feature",
    },
    {
      id: 8,
      title: "Clean-up unused variables",
    },
  ];

  let completed = [
    {
      id: 9,
      title: "Implement tailwind CSS",
    },
    {
      id: 10,
      title: "Setup JEST unit testing",
    },
  ];

  let deployed = [
    {
      id: 11,
      title: "Setup CI/CD Pipeline on GITLAB",
    },
    {
      id: 12,
      title: "Setup Terraform IAC Project on GITLAB",
    },
  ];
</script>

<div class="wrapper">
  <div class="header">
    <div class="header-title">Kanban Board</div>
    <div class="header-spacer" />
  </div>
  <div class="kanban">
    <Board bind:items={backlogs} title="Backlogs" />
    <Board bind:items={progress} title="Progress" />
    <Board bind:items={failed} title="Failed" />
    <Board bind:items={testing} title="Testing" />
    <Board bind:items={completed} title="Completed" />
    <Board bind:items={deployed} title="Deployed" />
  </div>
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

  .header {
    @apply bg-purple-500 p-4;
    min-height: 60px;
  }

  .header-title {
    @apply text-white font-bold;
  }

  .header-spacer {
    @apply flex-1;
  }

  .kanban {
    @apply flex py-4 px-4 items-start overflow-x-auto gap-4;
    height: calc(100vh - 60px);
    max-width: 100vw;
  }

  .board {
    @apply rounded-md bg-gray-50 flex flex-col;
    min-width: 250px;
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
</style>
