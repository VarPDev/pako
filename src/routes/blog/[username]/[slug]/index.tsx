import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  Link,
  RequestEventLoader,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
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

const getArticles = async ({ devToApiKey }: any) => {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: new Headers({
      "api-key": devToApiKey,
    } as any),
  });
  const articles = await res.json();
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
};

const getArticle = async (
  requestEvent: RequestEventLoader<QwikCityPlatform>
) => {
  const res = await fetch(
    `https://dev.to/api/articles/${requestEvent.params.username}/${requestEvent.params.slug}`
  );
  return await res.json();
};

export const useArticles = routeLoader$(async (requestEvent) => {
  let article = await getArticle(requestEvent);

  if (!article || article.status === 404) {
    article = null;
    requestEvent.status(404);
    requestEvent.redirect(307, "/404");
  }

  const articles = await getArticles({
    devToApiKey: requestEvent.env.get("DEV_TO_API_KEY"),
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

      <section class="title-section text-center">
        <h2>Recent articles</h2>
        {/* <h3>All my jobs</h3> */}
      </section>
      <section class="inner-section">
        <Articles articles={result.value.articles} limit={4} />

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

// export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
//   // example of loading params for this use case
//   // every implementation will be different
//   const articles = await getArticles({
//     devToApiKey: env.get("DEV_TO_API_KEY"),
//   });

//   return {
//     params: [{ username: articles[0].username, slug: articles[0].slug }],
//   };

//   return {
//     params: articles.map((article) => {
//       return { username: article.username, slug: article.slug };
//     }),
//   };
// };
