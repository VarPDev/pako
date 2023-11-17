import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";

const getUser = async (userId: number) => {
  const res = await fetch(`https://dev.to/api/users/${userId}`);
  const user = await res.json();
  return user.username;
};

export default component$(() => {
  return (
    <>
      <div>ciao</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pasquale De Lucia - Full-stack engineer",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const username = await getUser(1198163);
  return {
    params: [{ username }],
  };
};
