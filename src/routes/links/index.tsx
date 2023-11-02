import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const links = [
    {
      id: 1,
      title: "Github",
      url: "https://github.com/VarPDev",
      emoji: "😎",
    },
    {
      id: 2,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/pasquale-de-lucia-web-dev/",
      emoji: "😎",
    },
    {
      id: 3,
      title: "Stack Overflow",
      url: "https://stackoverflow.com/users/8172268/pasquale-de-lucia",
      emoji: "😎",
    },
  ];
  return (
    <>
      <section class="text-center">
        <h1>Links</h1>
        <h3>Some of my socials</h3>
      </section>

      <section class="link-section">
        <ul>
          {links.map((link) => (
            <li key={link.id} class="mb-4">
              <a
                class="relative transition duration-200 font-bold bg-secondary border-accent border-2 hover:bg-transparent py-4 w-100 block text-center text-white rounded-lg pl-12 md:px-12"
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                <span class="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">
                  {link.emoji}
                </span>
                <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pasquale De Lucia - Full-stack engineer",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
