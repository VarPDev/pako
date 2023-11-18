import { component$ } from "@builder.io/qwik";
import { Article } from "./article";
interface ItemProps {
  articles: Array<any>;
}

export const Articles = component$<ItemProps>((props) => {
  const articles = [...props.articles];

  return (
    <>
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 justify-items-center gap-12">
          {articles.map((a) => (
            <Article key={a.id} article={a}></Article>
          ))}
        </div>
      </div>
    </>
  );
});
