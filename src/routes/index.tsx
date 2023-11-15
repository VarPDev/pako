import {
  Signal,
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { Cards } from "~/components/cards/cards";
import { Articles } from "~/components/articles/articles";
import { Timeline } from "~/components/timeline/timeline";
import { Stacks } from "~/components/stacks/stacks";
import { LinkItem } from "~/components/linkItem/linkItem";
import { links } from "~/repository/links";
import { works } from "~/repository/work";
import { projects } from "~/repository/projects";
import { frontEnd, backEnd, tools } from "~/repository/stack";
import { format } from "date-fns";
import ImgPR from "/src/media/badge-first-pr.webp?jsx";

interface Refs {
  el: Signal<Element | undefined>;
  isVisible: Signal<Boolean>;
  observer: any;
  countVisible: number;
}

function getLang(lang: Array<string>): string {
  switch (true) {
    case lang.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}

export const useArticles = routeLoader$(async (requestEvent) => {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: new Headers({
      "api-key": requestEvent.env.get("DEV_TO_API_KEY"),
    } as any),
  });
  const articles = await res.json();
  return articles.map((a: any) => {
    return {
      id: a.id,
      href: a.url,
      title: a.title,
      description: a.description,
      date: format(new Date(a.published_timestamp), "PP"),
      lang: getLang(a.tag_list),
    };
  }) as Array<any>;
});

export default component$(() => {
  const articles = useArticles();

  const projectTitleRef = useSignal<Element>();
  const projectTitleIsVisible = useSignal<Boolean>(true);

  const projectRef = useSignal<Element>();
  const projectIsVisible = useSignal<Boolean>(true);

  const historyTitleRef = useSignal<Element>();
  const historyTitleIsVisible = useSignal<Boolean>(true);

  const historyeRef = useSignal<Element>();
  const historyIsVisible = useSignal<Boolean>(true);

  const articlesTitleRef = useSignal<Element>();
  const articlesTitleIsVisible = useSignal<Boolean>(true);

  const articlesRef = useSignal<Element>();
  const articlesIsVisible = useSignal<Boolean>(true);

  const stackTitleRef = useSignal<Element>();
  const stackTitleIsVisible = useSignal<Boolean>(true);

  const stackFeRef = useSignal<Element>();
  const stackFeIsVisible = useSignal<Boolean>(true);

  const stackBeRef = useSignal<Element>();
  const stackBeIsVisible = useSignal<Boolean>(true);

  const stackToRef = useSignal<Element>();
  const stackToIsVisible = useSignal<Boolean>(true);

  const openTitleRef = useSignal<Element>();
  const openTitleIsVisible = useSignal<Boolean>(true);

  const openRef = useSignal<Element>();
  const openIsVisible = useSignal<Boolean>(true);

  const linksTitleRef = useSignal<Element>();
  const linksTitleIsVisible = useSignal<Boolean>(true);

  const linksRef = useSignal<Element>();
  const linksIsVisible = useSignal<Boolean>(true);

  const refs: Array<Refs> = [
    {
      el: projectTitleRef,
      isVisible: projectTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: projectRef,
      isVisible: projectIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: historyTitleRef,
      isVisible: historyTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: historyeRef,
      isVisible: historyIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: articlesTitleRef,
      isVisible: articlesTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: articlesRef,
      isVisible: articlesIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: stackTitleRef,
      isVisible: stackTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: stackFeRef,
      isVisible: stackFeIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: stackBeRef,
      isVisible: stackBeIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: stackToRef,
      isVisible: stackToIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: openTitleRef,
      isVisible: openTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    { el: openRef, isVisible: openIsVisible, observer: null, countVisible: 0 },
    {
      el: linksTitleRef,
      isVisible: linksTitleIsVisible,
      observer: null,
      countVisible: 0,
    },
    {
      el: linksRef,
      isVisible: linksIsVisible,
      observer: null,
      countVisible: 0,
    },
  ];

  useVisibleTask$(() => {
    refs.forEach((ref) => {
      if (ref.el.value) {
        // TODO: when isVisible became true remove observer
        ref.observer = new IntersectionObserver(([entry]) => {
          ref.isVisible.value = entry.isIntersecting;
          ref.countVisible = entry.intersectionRatio
            ? ref.countVisible + 1
            : ref.countVisible;

          console.log("🚀 ~ entry.isIntersecting:", entry.isIntersecting);
          if (ref.isVisible.value && ref.countVisible > 0) {
            ref.observer.disconnect();
          }
        });

        ref.observer.observe(ref.el.value);
      }
    });
  });

  return (
    <>
      <section>
        <Hero role={works[0].role} company={works[0].company} />
      </section>

      <section
        ref={projectTitleRef}
        class={`
      title-section text-center
      animation
      ${projectTitleIsVisible.value && "isVisible"}
    `}
      >
        <h2>Recent projects</h2>
        {/* <h3>All my jobs</h3> */}
      </section>
      <section
        ref={projectRef}
        class={`inner-section
      animation
      ${projectIsVisible.value && "isVisible"}`}
      >
        <Cards items={projects} limit={3} />

        <p class="flex justify-center pt-6">
          <Link
            href="/projects"
            aria-label="See more projects"
            class="btn btn-primary text-black"
          >
            See more projects
          </Link>
        </p>
      </section>

      <section
        ref={historyTitleRef}
        class={`
      title-section text-center
      animation
      ${historyTitleIsVisible.value && "isVisible"}
    `}
      >
        <h2>History</h2>
        <h3>All my jobs</h3>
      </section>
      <section
        ref={historyeRef}
        class={`w-11/12 lg:w-5/6 sticky animation
      ${historyIsVisible.value && "isVisible"}`}
      >
        <Timeline items={works}></Timeline>
      </section>

      <section
        ref={articlesTitleRef}
        class={`
      title-section text-center
      animation
      ${articlesTitleIsVisible.value && "isVisible"}
    `}
      >
        <h2>Recent articles</h2>
        {/* <h3>All my jobs</h3> */}
      </section>
      <section
        ref={articlesRef}
        class={`inner-section
      animation
      ${articlesIsVisible.value && "isVisible"}`}
      >
        <Articles articles={articles.value} limit={4} />

        <p class="flex justify-center pt-6">
          <Link
            href="/blog"
            aria-label="Read more articles"
            class="btn btn-primary text-black"
          >
            Read more articles
          </Link>
        </p>
      </section>

      <section
        ref={stackTitleRef}
        class={`title-section text-center
      animation
      ${stackTitleIsVisible.value && "isVisible"}`}
      >
        <h2>Stack</h2>
        <h3>My tecnology stack</h3>
      </section>

      {/* front end */}
      <section
        ref={stackFeRef}
        class={`inner-section
        animation
        ${stackFeIsVisible.value && "isVisible"}`}
      >
        <Stacks title="Front end" stacks={frontEnd} />
      </section>

      {/* back end */}
      <section
        ref={stackBeRef}
        class={`inner-section
        animation
        ${stackBeIsVisible.value && "isVisible"}`}
      >
        <Stacks title="Back end" stacks={backEnd} />
      </section>

      {/* tools end */}
      <section
        ref={stackToRef}
        class={`inner-section
        animation
        ${stackToIsVisible.value && "isVisible"}`}
      >
        <Stacks title="Tools" stacks={tools} />
      </section>

      <section
        ref={openTitleRef}
        class={`title-section text-center
      animation
      ${openTitleIsVisible.value && "isVisible"}`}
      >
        <h2>Open source world</h2>
        <h3>My first accepted PR | Qwik</h3>
      </section>

      <section
        ref={openRef}
        class={`inner-section
        animation
        ${openIsVisible.value && "isVisible"}`}
      >
        <div class="flex items-center justify-center">
          <ImgPR
            alt="My first PR"
            class="max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <section
        ref={linksTitleRef}
        class={`title-section text-center
      animation
      ${linksIsVisible.value && "isVisible"}`}
      >
        <h2>Links</h2>
        <h3>Some of my socials</h3>
      </section>
      <section
        ref={linksRef}
        class={`link-section
        animation
        ${linksIsVisible.value && "isVisible"}`}
      >
        <LinkItem links={links}></LinkItem>
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
