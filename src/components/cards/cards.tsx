import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface ItemProps {
  limit?: number;
  items: Array<any>;
}

export const Cards = component$<ItemProps>((props) => {
  let cards = [...props.items];

  if (props.limit) {
    cards = cards.splice(0, props.limit);
  }

  return (
    <>
      <div>
        <div class="grid md:grid-cols-3 justify-items-center gap-12">
          {cards.map((c) => (
            <div
              key={c.id}
              class="card w-80 bg-base-100 shadow-xl image-full w-full max-w-[18rem]"
            >
              {c.image && (
                <figure>
                  <img
                    height={300}
                    width={300}
                    src={c.image}
                    alt={c.altImage}
                  />
                </figure>
              )}
              <div class="card-body">
                <h2 class="card-title">{c.title}</h2>
                <p>
                  {c.description}
                  <br />
                  <br />
                  {/* TODO: bg-color non wor dynamically */}
                  {/* ${c.color} */}
                  <span
                    class={`bg-secondary text-black rounded-3xl p-1 text-xs`}
                  >
                    {c.type}
                  </span>
                </p>
                <div class="card-actions justify-end">
                  <Link
                    class="btn btn-primary text-black"
                    href={c.href}
                    target="_blank"
                  >
                    {c.action}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
