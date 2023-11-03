import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface ItemProps {
  limit?: number;
  title: string;
}

export const Cards = component$<ItemProps>((props) => {
  let cards = [
    {
      id: 1,
      title: "Rick & Morty",
      description: "Wiki about rick and morty anime",
      altImage: "rick and morty",
      image: "/rick_and_morty.png",
      action: "Try it",
      type: "Angular",
      color: "orange-600",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 2,
      title: "Resume me",
      description: "An app built in flutter to share own resume",
      altImage: "Resume me app logo",
      image: "/resume_me.png",
      action: "Download",
      type: "APP",
      color: "orange-600",
      href: "https://play.google.com/store/apps/details?id=com.pako.resume_me&pli=1",
    },
    {
      id: 3,
      title: "Tab sync",
      description:
        "Npm library that allow you tu communicate between multiple tabs",
      altImage: "Tab sync logo",
      // image: "/rick_and_morty.png",
      action: "Try it",
      type: "NPM",
      color: "orange-600",
      href: "https://www.npmjs.com/package/@devhobby/tab-sync",
    },
  ];

  if (props.limit) {
    cards = cards.splice(0, props.limit);
  }

  return (
    <>
      <div class="container mx-auto">
        <h2 class="text-center">{props.title}</h2>
        <div class="grid md:grid-cols-3 justify-items-center gap-12">
          {cards.map((c) => (
            <div
              key={c.id}
              class="card w-80 bg-base-100 shadow-xl image-full w-full"
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
                  {/* TODO: bg-color non wor dynamically */}
                  <span class={`bg-${c.color} rounded-3xl p-1 text-xs`}>
                    {c.type}
                  </span>
                </p>
                <div class="card-actions justify-end">
                  <Link href={c.href} target="_blank">
                    <button class="btn btn-primary">{c.action}</button>
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
