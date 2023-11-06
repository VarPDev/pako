import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Articles } from "~/components/articles/articles";

export default component$(() => {
  return (
    <>
      <section class="text-center">
        <h1>Blog</h1>
        <h3>Some of my articles</h3>
      </section>

      {/* <section class="inner-section">
        <Articles />
      </section> */}
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
