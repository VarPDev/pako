import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface ItemProps {
  limit?: number;
  title: string;
}

export const Articles = component$<ItemProps>((props) => {
  let articles = [
    {
      id: 1,
      title: "Creare un bot telegram con NodeJS",
      description:
        "Il nostro chatbot si occuperà di ricercare su Reddit ciò che l’utente ha scritto tramite messaggio e restituirà un risultato.",
      href: "https://italiancoders.it/telegram-bot-con-nodejs/",
      date: "16 Jan 2018",
    },
    {
      id: 2,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 3,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 4,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 5,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 6,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 7,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 8,
      title: "Rick & Morty",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      date: "16 Jan 2018",
      href: "https://rick-and-morty-e.web.app/",
    },
  ];

  if (props.limit) {
    articles = articles.splice(0, props.limit);
  }

  return (
    <>
      <div class="container mx-auto">
        <h2 class="text-center">{props.title}</h2>
        <div class="grid md:grid-cols-2 justify-items-center gap-12">
          {articles.map((c) => (
            <Link href={c.href} target="_blank" key={c.id}>
              <article class="prose">
                <h3>{c.title}</h3>
                <p class="tagline">{c.date}</p>
                <p>{c.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});
