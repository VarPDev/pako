import { format } from "date-fns";

function getLang(lang: Array<string>): string {
  switch (true) {
    case lang.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}

export const getArticles = async ({ devToApiKey, limit }: any) => {
  const res = await fetch(
    `https://dev.to/api/articles/me/published?per_page=${limit || 30}`,
    {
      headers: new Headers({
        "api-key": devToApiKey,
      } as any),
    }
  );
  if (res.status !== 200) {
    throw Error(res.status.toString());
  }
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
