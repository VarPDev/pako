import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'

export default component$(() => {
  return (
    <>
      <section class="title-section text-center">
        <h2 class="font-bold uppercase mt-12 mb-16">Unsubscribe Successful</h2>
      </section>
      <InnerSectionComponent showCta={false}>
        <p class="text-xl">
          You have successfully unsubscribed. We're sorry to see you go!
        </p>
        <p class="text-xl">
          If this was a mistake, feel free to subscribe again anytime.
        </p>
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
