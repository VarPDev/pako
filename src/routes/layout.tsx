import { component$, Slot, useSignal } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'
import { isWithinInterval, set } from 'date-fns'
import { Cat } from '~/components/cat/cat'
import { CatWalk } from '~/components/cat/cat-walk'
import { Eggs } from '~/components/eggs/eggs'
import { Footer } from '~/components/footer/footer'
import { Header } from '~/components/header/header'
import { Rudolph } from '~/components/rudolph/rudolph'
import { Santa } from '~/components/santa/santa'

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

  const snows = snowInRange ? new Array(200).fill(0) : null

  const easterStart = set(today, {
    month: 2,
    date: 5,
  })

  const easterEnd = set(today, {
    month: 3,
    date: 5,
  })

  const easterInRange = isWithinInterval(today, {
    start: easterStart,
    end: easterEnd,
  })

  return (
    <>
      {show.value && snows && (
        <div class="snow-container">
          {snows.map((item, index) => (
            <div key={index} class="snow"></div>
          ))}
        </div>
      )}

      <Header show={show} />
      <main>
        {show.value && !snows && !easterInRange && <Cat />}
        {/* If I move this after the Slot, on value change slot reload */}
        {show.value && !snows && !easterInRange && <CatWalk />}
        {show.value && snows && <Santa />}
        {show.value && snows && <Rudolph />}
        {show.value && easterInRange && <Eggs />}
        <Slot />
      </main>
      <Footer />
    </>
  )
})
