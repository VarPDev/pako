import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Cards } from '~/components/cards/cards'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { projects } from '~/repository/projects'

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h1>Projects</h1>
        <h2>Check out my projects</h2>
      </section>

      <InnerSectionComponent showCta={false}>
        <Cards items={projects} referrer="page-projects" />
      </InnerSectionComponent>
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
