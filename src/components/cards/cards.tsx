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
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 2,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 3,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 4,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 5,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 6,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 7,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    },
    {
      id: 8,
      title: 'Rick & Morty',
      description: 'Wiki about rick and morty anime',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      href: 'https://rick-and-morty-e.web.app/'
    }
  ]

  if (props.limit) {
    cards = cards.splice(0, props.limit)
  }

  return (
    <>
      <div class="container mx-auto">
        <h2 class="text-center">{props.title}</h2>
        <div class="grid md:grid-cols-3 justify-items-center gap-12">
          {
            cards.map(c => (
              <div key={c.id} class="card w-80 bg-base-100 shadow-xl image-full w-full">
                <figure><img height={300} width={300} src={c.image} alt={c.altImage} /></figure>
                <div class="card-body">
                  <h2 class="card-title">{c.title}</h2>
                  <p>{c.description}</p>
                  <div class="card-actions justify-end">
                    <Link href={c.href} target="_blank">
                      <button class="btn btn-primary">{c.action}</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
});
