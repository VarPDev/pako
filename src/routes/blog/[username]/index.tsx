import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";

const getUser = async () => {
  const res = await fetch("https://dev.to/api/users/1198163");
  const user = await res.json();
  return user.username;
};

export default component$(() => {
  const { params } = useLocation();

  return <p>Example: {params.username}</p>;
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const username = await getUser();

  return {
    params: [{ username }],
  };
};
