import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Cards } from "~/components/cards/cards";
import { projects } from "~/repository/projects";

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h1>Projects</h1>
        <h2>Check out my projects</h2>
      </section>

      <section class="inner-section">
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
      content:
        "Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover",
    },
  ],
};
