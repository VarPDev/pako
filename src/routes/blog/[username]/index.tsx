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
      username: a.user.username,
      slug: a.slug,
    };
  }) as Array<any>;
};

// export default component$(() => {
//   const { params } = useLocation();

//   return (
//     <p>
//       Example: {params.username} {params.slug}
//     </p>
//   );
// });

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  // example of loading params for this use case
  // every implementation will be different
  const articles = await getArticles({
    devToApiKey: env.get("DEV_TO_API_KEY"),
  });

  return {
    params: articles.map((article) => {
      return { username: article.username, slug: article.slug };
    }),
  };
};
