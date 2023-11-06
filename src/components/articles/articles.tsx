import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface ItemProps {
  limit?: number;
  articles: Array<any>;
}

export const Articles = component$<ItemProps>((props) => {
  let articles = props.articles;

  if (props.limit) {
    articles = articles.splice(0, props.limit);
  }

  return (
    <>
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 justify-items-center gap-12">
          {articles.map((c) => (
            <Link href={c.href} target="_blank" key={c.id}>
              <article class="prose">
                <h3>{c.title}</h3>
                <p class="flex items-center gap-2">
                  {c.date}{" "}
                  <span class="bg-secondary text-black p-1 text-xs rounded">
                    {c.lang}
                  </span>
                </p>
                <p>{c.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});
