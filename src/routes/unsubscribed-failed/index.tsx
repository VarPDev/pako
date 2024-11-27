import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { LinkItem } from '~/components/linkItem/linkItem'
import { links } from '~/repository/links'

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h2 class="font-bold uppercase mt-12 mb-16">Something wrong</h2>
      </section>
      <InnerSectionComponent showCta={false}>
        <p class="text-xl text-center">
          Write to{' '}
          <a class="text-primary" href="mailto:pasquale.delucia96@gmail.com">
            pasquale.delucia96@gmail.com
          </a>{' '}
          to Unsubscribe.
        </p>
        <p class="text-xl text-center">
          Remember to send email you want to unsubscribe
        </p>
      </InnerSectionComponent>

      <section id="links" class="title-section text-center">
        <h2>Links</h2>
        <p class="text-xl">Stay updated or get in touch on my socials</p>
      </section>

      <section class="link-section">
        <LinkItem links={links} referrer="index"></LinkItem>
      </section>
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
