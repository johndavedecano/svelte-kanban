<script>
  // @ts-nocheck

  import Board from "$lib/components/board.svelte";
  import Container from "$lib/components/container.svelte";
  import Header from "$lib/components/header.svelte";

  let onboarding = [
    {
      id: 1,
      title: "John Dave Decano",
      subtitle: "Senior Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 2,
      title: "James Marco",
      subtitle: "QA Analyst",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  ];

  let interview = [
    {
      id: 3,
      title: "Rose Ann Solano",
      subtitle: "UI/UX Developer",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 4,
      title: "Sean David Decano",
      subtitle: "Scrum Manager",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  ];

  let assestment = [
    {
      id: 5,
      title: "Seiji Villafranca",
      subtitle: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 6,
      title: "Jonathan Sevilla",
      subtitle: "Junior Python Developer",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ];

  let finalInterview = [
    {
      id: 7,
      title: "Joe Palala",
      subtitle: "Web3 Developer",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 8,
      title: "Mac Ignacio",
      subtitle: "NodeJS Developer",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];

  let offer = [
    {
      id: 9,
      title: "Carlo Reyes",
      subtitle: "Team Lead",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 10,
      title: "JR Capacio",
      subtitle: "QA Tester",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    },
  ];

  let hired = [
    {
      id: 11,
      title: "Anthony Edwards",
      subtitle: "Security Engineer",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      id: 12,
      title: "Jordan Clarkson",
      subtitle: "DEVOPS Engineer",
      avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    },
  ];
</script>

<Header title="Job Applicants Board" />

<Container>
  <Board bind:items={onboarding} title="Onboarding" />
  <Board bind:items={interview} title="Initial Interview" />
  <Board bind:items={assestment} title="Assestment" />
  <Board bind:items={finalInterview} title="Final Interview" />
  <Board bind:items={offer} title="Job Offer" />
  <Board bind:items={hired} title="Accepted - Hired" />
</Container>
