import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  Link,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { Articles } from "~/components/articles/articles";
import { getArticle, getArticles, getUser } from "~/repository/articles";

export const useArticles = routeLoader$(async (requestEvent) => {
  const username = await getUser(1198163);

  let article = await getArticle(
    requestEvent.params.slug,
    username ?? "nyruchi"
  );

  if (!article || article.status === 404) {
    article = null;
    requestEvent.status(404);
    requestEvent.redirect(307, "/404");
  }

  const articles = await getArticles({
    devToApiKey: requestEvent.env.get("DEV_TO_API_KEY"),
    limit: 4,
  });

  return article
    ? {
        article: {
          ...article,
          body_html: article.body_html.replaceAll("<a ", '<a target="_blank" '),
        },
        articles,
      }
    : null;
});

export default component$(() => {
  const result: any = useArticles();

  if (!result.value.article) {
    return <p>Sorry, looks like I didn't wrote this article.</p>;
  }

  return (
    <>
      <section class="title-section small">
        <h1>{result.value.article.title}</h1>
      </section>

      <section class="inner-section small">
        <div class="tags">
          {result.value.article.tags.map((tag: string) => {
            return (
              <Link key={tag} href={`https://dev.to/t/${tag}`} target="_blank">
                #{tag}
              </Link>
            );
          })}
        </div>
      </section>

      <section class="inner-section small article">
        <div dangerouslySetInnerHTML={result.value.article.body_html}></div>
      </section>

      <section class="title-section text-center mt-20">
        <h2>Latest articles</h2>
      </section>
      <section class="inner-section">
        <Articles articles={result.value.articles} />

        <p class="flex justify-center pt-6">
          <Link
            href="/blog"
            aria-label="Read more articles"
            class="btn btn-primary text-black"
          >
            Read more articles
          </Link>
        </p>
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

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  // example of loading params for this use case
  // every implementation will be different
  const articles = await getArticles({
    devToApiKey: env.get("DEV_TO_API_KEY"),
  });

  return {
    params: articles.map((article) => {
      return { slug: article.slug };
    }),
  };
};
