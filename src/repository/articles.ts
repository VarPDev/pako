import { routeLoader$ } from "@builder.io/qwik-city";

export const useArticles = routeLoader$(async () => {
  const res = await fetch("https://dev.to/api/articles?username=nyruchi");
  const articles = await res.json();
  return articles;
});
