import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Article {
  id: string;
  title: string;
  date: string;
  slug: string;
  lang: string;
  description: string;
}

interface ItemProps {
  article: Article;
}

export const Article = component$<ItemProps>((props) => {
  const article = props.article;

  return (
    <>
      <Link href={`/blog/${article.slug}`}>
        <article class="prose">
          <h3>{article.title}</h3>
          <p class="flex items-center gap-2">
            {article.date}{" "}
            <span class="bg-secondary text-black p-1 text-xs rounded">
              {article.lang}
            </span>
          </p>
          <p>{article.description}</p>
        </article>
      </Link>
    </>
  );
});
