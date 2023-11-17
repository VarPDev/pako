import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";

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
      // date: format(new Date(a.published_timestamp), "PP"),
      // lang: getLang(a.tag_list),
    };
  }) as Array<any>;
};

const getUser = async () => {
  const res = await fetch("https://dev.to/api/users/1198163");
  const user = await res.json();
  return user.username;
};

export default component$(() => {
  const { params } = useLocation();

  return <p>Example: {params.username}</p>;
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const username = await getUser();

  return {
    params: [{ username }],
  };
};

// export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
//   // example of loading params for this use case
//   // every implementation will be different
//   const articles = await getArticles({
//     devToApiKey: env.get("DEV_TO_API_KEY"),
//   });

//   return {
//     params: articles.map((article) => {
//       return { username: article.username, slug: article.slug };
//     }),
//   };
// };
