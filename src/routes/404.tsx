import { component$ } from '@builder.io/qwik'
import { Link, type DocumentHead } from '@builder.io/qwik-city'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
// import ImgAliensAlien from "~/media/aliens-alien.gif?jsx";

export default component$(() => {
  return (
    <>
      <InnerSectionComponent showCta={false}>
        <div class="flex flex-col gap-12 items-center justify-center">
          <h1 class="mb-6">OPSS!</h1>
          <p>
            Uh-oh! It looks like you've wandered into the cosmic void of
            cyberspace. Our binary aliens are throwing a rave just around the
            corner. Hurry back before they invite you to dance in zeros and
            ones! Alternatively, try our game at this{' '}
            <Link href="../button-game">link</Link>.
          </p>
          {/* width="498"
          height="280" */}
          {/* <ImgAliensAlien alt="Binary aliens" /> */}
          <img
            decoding="async"
            loading="lazy"
            src="
              /aliens-alien.gif"
            width="1200"
            height="1200"
          ></img>
        </div>
      </InnerSectionComponent>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pasquale De Lucia - Full-stack engineer - 404',
  meta: [
    {
      name: 'description',
      content:
        'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
    },
  ],
}
