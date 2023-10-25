import { writable } from "svelte/store";

export default writable({
  modal: false,
  params: {
    title: "",
    subtitle: "",
    id: null,
    avatar: null,
  },
});
