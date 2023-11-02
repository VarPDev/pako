import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { Cards } from "~/components/cards/cards";
import { Articles } from "~/components/articles/articles";

export default component$(() => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section class="w-4/6 md:w-11/12 lg:w-2/3">
        <Cards limit={3} title="Recently projects" />
      </section>
      <section class="w-4/6 md:w-11/12 lg:w-2/3">
        <Articles limit={4} title="Recently articles" />
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
