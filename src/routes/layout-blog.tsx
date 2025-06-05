import {
  component$,
  Slot,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik'
import {
  routeLoader$,
  useLocation,
  type RequestHandler,
} from '@builder.io/qwik-city'
import { InitialValues } from '@modular-forms/qwik'
import { isWithinInterval, set } from 'date-fns'
import { AnimatedComp } from '~/components/animated-component/animated-component'
import { CommentForm } from '~/components/blog/blogComponent'
import { Cat } from '~/components/cat/cat'
import { CatWalk } from '~/components/cat/cat-walk'
import { Eggs } from '~/components/eggs/eggs'
import { Footer } from '~/components/footer/footer'
import { Header } from '~/components/header/header'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { Newsletter, NewsletterForm } from '~/components/newsletter/newsletter'
import { Rudolph } from '~/components/rudolph/rudolph'
import { Santa } from '~/components/santa/santa'
import { ShowContext, SnowContext } from '~/services/common.service'

export const useNewsFormLoader = routeLoader$<InitialValues<NewsletterForm>>(
  () => ({
    email: '',
  }),
)

export const useCommentFormLoader = routeLoader$<InitialValues<CommentForm>>(
  () => ({
    name: '',
    message: '',
  }),
)

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  })
}

export default component$(() => {
  const show = useSignal(false)
  useContextProvider(ShowContext, show)

  const location = useLocation()
  const match = location.url.pathname.match(/^\/[^/]+\/([^/]+)\/?/)
  const blogType = match ? match[1] : 'dev'

  const today = new Date()
  const snowStart = set(today, {
    month: 11,
    date: 5,
  })
  const snowEnd = set(today, {
    year: today.getFullYear() + 1,
    month: 0,
    date: 15,
  })

  const snowInRange = isWithinInterval(today, {
    start: snowStart,
    end: snowEnd,
  })

  const snows = useSignal(snowInRange ? new Array(200).fill(0) : null)
  useContextProvider(SnowContext, snows)

  const easterStart = set(today, {
    month: 2,
    date: 5,
  })

  const easterEnd = set(today, {
    month: 4,
    date: 1,
  })

  const easterInRange = isWithinInterval(today, {
    start: easterStart,
    end: easterEnd,
  })

  return (
    <>
      {show.value && snows.value && (
        <div class="snow-container">
          {snows.value.map((item, index) => (
            <div key={index} class="snow"></div>
          ))}
        </div>
      )}

      <Header />
      <main>
        {show.value && !snows.value && !easterInRange && <Cat />}
        {/* If I move this after the Slot, on value change slot reload */}
        {show.value && !snows.value && !easterInRange && <CatWalk />}
        {show.value && snows.value && <Santa />}
        {show.value && snows.value && <Rudolph />}
        {show.value && easterInRange && <Eggs />}
        <Slot />

        <AnimatedComp>
          <InnerSectionComponent showCta={false}>
            <Newsletter blogType={blogType} referral="layout" />
          </InnerSectionComponent>
        </AnimatedComp>
      </main>
      <Footer />
    </>
  )
})
