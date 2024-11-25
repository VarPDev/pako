import { component$, useStylesScoped$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { AnimatedComp } from '~/components/animated-component/animated-component'
import { Articles } from '~/components/articles/articles'
import { Cards } from '~/components/cards/cards'
import { Hero } from '~/components/hero/hero'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { LinkItem } from '~/components/linkItem/linkItem'
import { Stacks } from '~/components/stacks/stacks'
import { Timeline } from '~/components/timeline/timeline'
import { links } from '~/repository/links'
import { projects } from '~/repository/projects'
import { backEnd, frontEnd, tools } from '~/repository/stack'
import { works } from '~/repository/work'
import { latestArticles } from '~/services/graph-ql.service'
import styles from './index.css?inline'
import ImgPR from '/src/media/badge-first-pr.webp?jsx'

// export const useArticles = routeLoader$(async requestEvent => {
//   return await getArticles({
//     devToApiKey: requestEvent.env.get('DEV_TO_API_KEY'),
//     limit: 4,
//   })
// })

export const useLatestDevArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return latestArticles(token || '', 'dev', 4)
})

export default component$(() => {
  useStylesScoped$(styles)

  const latestArticles = useLatestDevArticles()

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
        <InnerSectionComponent
          showCta={true}
          ctaHref="/projects"
          ctaLabel="See more projects"
          gcClick="more-projects"
          gcTitle="More Projects"
          gcReferrer="referrer"
        >
          <Cards items={projects} limit={3} referrer="index-project" />
        </InnerSectionComponent>
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
          <h2 class="font-bold">Latest articles</h2>
          {/* <h3>All my jobs</h3> */}
        </section>
      </AnimatedComp>
      <AnimatedComp>
        <InnerSectionComponent
          showCta={true}
          ctaHref="/blog/dev"
          ctaLabel="Read more articles"
          gcClick="more-articles"
          gcTitle="More Articles"
          gcReferrer="referrer"
        >
          <Articles
            urlBlogBasePath="blog/dev"
            articles={latestArticles.value.data.allPages}
            referrer="index-article"
          />
        </InnerSectionComponent>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Tecnology stack</h2>
          {/* <h3>My tecnology stack</h3> */}
        </section>
      </AnimatedComp>

      {/* front end */}
      <AnimatedComp>
        <InnerSectionComponent showCta={false}>
          <Stacks title="Front end" stacks={frontEnd} />
        </InnerSectionComponent>
      </AnimatedComp>

      {/* back end */}
      <AnimatedComp>
        <InnerSectionComponent showCta={false}>
          <Stacks title="Back end" stacks={backEnd} />
        </InnerSectionComponent>
      </AnimatedComp>

      {/* tools end */}
      <AnimatedComp>
        <InnerSectionComponent showCta={false}>
          <Stacks title="Tools" stacks={tools} />
        </InnerSectionComponent>
      </AnimatedComp>

      <AnimatedComp>
        <section class="title-section text-center">
          <h2>Open source | My first accepted PR | Qwik</h2>
        </section>
      </AnimatedComp>

      <AnimatedComp>
        <InnerSectionComponent showCta={false}>
          <div class="flex items-center justify-center">
            <ImgPR
              alt="My first PR"
              class="max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl"
            />
          </div>
        </InnerSectionComponent>
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
