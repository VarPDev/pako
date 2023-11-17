import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const { params } = useLocation();

  return <p>Example: {params.username}</p>;
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  return {
    params: [{ username: "nyruchi" }],
  };
};
