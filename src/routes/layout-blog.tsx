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
import { AnimatedComp } from '~/components/animated-component/animated-component'
import { CommentForm } from '~/components/blog/blogComponent'
import { Footer } from '~/components/footer/footer'
import { Header } from '~/components/header/header'
import { InnerSectionComponent } from '~/components/inner-section/innerSectionComponent'
import { Newsletter, NewsletterForm } from '~/components/newsletter/newsletter'
import { ShowContext } from '~/services/common.service'

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

  return (
    <>
      <Header />
      <main>
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
