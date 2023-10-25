<script>
  // @ts-nocheck

  import Board from "$lib/components/board.svelte";
  import Container from "$lib/components/container.svelte";
  import Header from "$lib/components/header.svelte";

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

<Header title="Kanban" />

<Container>
  <Board bind:items={backlogs} title="Backlogs" />
  <Board bind:items={progress} title="Progress" />
  <Board bind:items={failed} title="Failed" />
  <Board bind:items={testing} title="Testing" />
  <Board bind:items={completed} title="Completed" />
  <Board bind:items={deployed} title="Deployed" />
</Container>
