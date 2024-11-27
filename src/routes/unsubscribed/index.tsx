import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { LinkItem } from '~/components/linkItem/linkItem'
import { links } from '~/repository/links'

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h2 class="font-bold uppercase my-12">Unsubscribe Successful</h2>
      </section>
      <InnerSectionComponent showCta={false}>
        <p class="text-xl text-center">
          You have successfully unsubscribed. We're sorry to see you go!
        </p>
        <p class="text-xl text-center">
          If this was a mistake, feel free to subscribe again anytime.
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
