import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { Link, routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { AnimatedComp } from '~/components/animated-component/animated-component'
import { Articles } from '~/components/articles/articles'
import { Cards } from '~/components/cards/cards'
import { Hero } from '~/components/hero/hero'
import { LinkItem } from '~/components/linkItem/linkItem'
import { Stacks } from '~/components/stacks/stacks'
import { Timeline } from '~/components/timeline/timeline'
import { getArticles } from '~/repository/articles'
import { links } from '~/repository/links'
import { projects } from '~/repository/projects'
import { backEnd, frontEnd, tools } from '~/repository/stack'
import { works } from '~/repository/work'
import styles from './index.css?inline'
import ImgPR from '/src/media/badge-first-pr.webp?jsx'

export const useArticles = routeLoader$(async requestEvent => {
  return await getArticles({
    devToApiKey: requestEvent.env.get('DEV_TO_API_KEY'),
    limit: 4,
  })
})

export default component$(() => {
  useStylesScoped$(styles)

  const articles = useArticles()

  return (
    <>
      <section>
        <Hero role={works[0].role} company={works[0].company} />
      </section>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Latest projects</h2>
          {/* <h3>All my jobs</h3> */}
        </section>
      </AnimatedComp>
      <AnimatedComp>
        <section class="inner-section">
          <Cards items={projects} limit={3} referrer="index-project" />

          <p class="flex justify-center pt-6">
            <Link
              href="/projects"
              aria-label="See more projects"
              class="btn btn-primary text-white"
              data-goatcounter-click="more-projects"
              data-goatcounter-title="More Projects"
              data-goatcounter-referrer="referrer"
            >
              See more projects
            </Link>
          </p>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>History</h2>
          <p class="text-xl">All my experiences</p>
        </section>
      </AnimatedComp>
      <AnimatedComp>
        <section class="w-11/12 lg:w-5/6 sticky mx-auto">
          <Timeline items={works}></Timeline>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Latest articles</h2>
          {/* <h3>All my jobs</h3> */}
        </section>
      </AnimatedComp>
      <AnimatedComp>
        <section class="inner-section">
          <Articles articles={articles.value} referrer="index-article" />

          <p class="flex justify-center pt-6">
            <Link
              href="/blog"
              aria-label="Read more articles"
              class="btn btn-primary text-white"
              data-goatcounter-click="more-articles"
              data-goatcounter-title="More Articles"
              data-goatcounter-referrer="referrer"
            >
              Read more articles
            </Link>
          </p>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Tecnology stack</h2>
          {/* <h3>My tecnology stack</h3> */}
        </section>
      </AnimatedComp>

      {/* front end */}
      <AnimatedComp>
        <section class="inner-section">
          <Stacks title="Front end" stacks={frontEnd} />
        </section>
      </AnimatedComp>

      {/* back end */}
      <AnimatedComp>
        <section class="inner-section">
          <Stacks title="Back end" stacks={backEnd} />
        </section>
      </AnimatedComp>

      {/* tools end */}
      <AnimatedComp>
        <section class="inner-section">
          <Stacks title="Tools" stacks={tools} />
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Open source | My first accepted PR | Qwik</h2>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section class="inner-section">
          <div class="flex items-center justify-center">
            <ImgPR
              alt="My first PR"
              class="max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl"
            />
          </div>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <section id="links" class="title-section text-center">
          <h2>Links</h2>
          <p class="text-xl">Stay updated or get in touch on my socials</p>
        </section>
      </AnimatedComp>
      <AnimatedComp>
        <section class="link-section">
          <LinkItem links={links} referrer="index"></LinkItem>
        </section>
      </AnimatedComp>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pasquale De Lucia - Full-stack engineer',
  meta: [
    {
      name: 'description',
      content:
        'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
    },
  ],
}
