import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h2 class="font-bold uppercase mt-12 mb-16">Something wrong</h2>
      </section>
      <InnerSectionComponent showCta={false}>
        <p class="text-xl">
          Write to{' '}
          <a href="mailto:pasquale.delucia96@gmail.com">
            pasquale.delucia96@gmail.com
          </a>{' '}
          to Unsubscribe.
        </p>
        <p class="text-xl">Remember to send email you want to unsubscribe</p>
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
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
}
