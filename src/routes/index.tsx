import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { Cards } from "~/components/cards/cards";
import { Articles } from "~/components/articles/articles";
import { Timeline } from "~/components/timeline/timeline";
import { Stacks } from "~/components/stacks/stacks";
import { LinkItem } from "~/components/linkItem/linkItem";
import { links } from "~/repository/links";
import { works } from "~/repository/work";
import { projects } from "~/repository/projects";
import { frontEnd, backEnd, tools } from "~/repository/stack";
import { format } from "date-fns";

function getLang(lang: Array<string>): string {
  switch (true) {
    case lang.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}

export const useArticles = routeLoader$(async () => {
  const res = await fetch("https://dev.to/api/articles?username=nyruchi");
  const articles = await res.json();
  return articles.map((a: any) => {
    return {
      id: a.id,
      href: a.url,
      title: a.title,
      description: a.description,
      date: format(new Date(a.published_timestamp), "PP"),
      lang: getLang(a.tag_list),
    };
  }) as Array<any>;
});

export default component$(() => {
  const articles = useArticles();

  return (
    <>
      <section>
        <Hero />
      </section>

      <section class="title-section text-center">
        <h2>Recent projects</h2>
        {/* <h3>All my jobs</h3> */}
      </section>
      <section class="inner-section">
        <Cards items={projects} limit={3} />

        <p class="flex justify-center pt-6">
          <Link href="/projects">
            <button class="btn btn-primary">See more</button>
          </Link>
        </p>
      </section>

      <section class="title-section text-center">
        <h2>History</h2>
        <h3>All my jobs</h3>
      </section>
      <section class="w-11/12 lg:w-5/6 sticky">
        <Timeline items={works}></Timeline>
      </section>

      <section class="title-section text-center">
        <h2>Recent articles</h2>
        {/* <h3>All my jobs</h3> */}
      </section>
      <section class="inner-section">
        <Articles articles={articles.value} limit={4} />

        <p class="flex justify-center pt-6">
          <Link href="/blog">
            <button class="btn btn-primary">Read more</button>
          </Link>
        </p>
      </section>

      <section class="title-section text-center">
        <h2>Stack</h2>
        <h3>My tecnology stack</h3>
      </section>
      {/* front end */}
      <section class="inner-section">
        <Stacks title="Front end" stacks={frontEnd} />
      </section>

      {/* back end */}
      <section class="inner-section">
        <Stacks title="Back end" stacks={backEnd} />
      </section>

      {/* tools end */}
      <section class="inner-section">
        <Stacks title="Tools" stacks={tools} />
      </section>

      <section class="title-section text-center">
        <h2>Links</h2>
        <h3>Some of my socials</h3>
      </section>
      <section class="link-section">
        <LinkItem links={links}></LinkItem>
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
