import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { format } from "date-fns";
import { Articles } from "~/components/articles/articles";

function getLang(lang: Array<string>): string {
  switch (true) {
    case lang.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}

export const useArticles = routeLoader$(async (requestEvent) => {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: new Headers({
      "api-key": requestEvent.env.get("DEV_TO_API_KEY"),
    } as any),
  });
  const articles = await res.json();
  console.log("🚀 ~ file: index.tsx:22 ~ useArticles ~ articles:", articles[0]);
  return articles.map((a: any) => {
    return {
      id: a.id,
      href: a.url,
      title: a.title,
      description: a.description,
      bodyMarkdown: a.body_markdown,
      username: a.user.username,
      slug: a.slug,
      date: format(new Date(a.published_timestamp), "PP"),
      lang: getLang(a.tag_list),
    };
  }) as Array<any>;
});

export default component$(() => {
  const articles = useArticles();

  return (
    <>
      <section class="title-section text-center">
        <h1>Blog</h1>
        <h3>Some of my articles</h3>
      </section>

      <section class="inner-section">
        <Articles articles={articles.value} />
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
