import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Cards } from "~/components/cards/cards";
import { projects } from "~/repository/projects";

export default component$(() => {
  return (
    <>
      <section class="text-center">
        <h1>Projects</h1>
        <h3>Some of my projects</h3>
      </section>

      <section class="5/6 lg:w-5/6">
        <Cards items={projects} />
      </section>
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
