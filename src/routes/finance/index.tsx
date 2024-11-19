import { component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Link, routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { NoTips } from '~/components/finance/no-tips/no-tips'
import { QDatoText } from '~/integrations/react/QDatoText'
import { articleDetailApi, latestAsrticles } from '~/services/graph-ql.service'
import styles from './finance.css?inline'

export const useArticle = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi('finance', token || '')
})

export const useLatestArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return latestAsrticles(token || '')
})

export default component$(() => {
  useStyles$(styles)
  const article = useArticle()
  const latestArticle = useLatestArticles()

  const showAlert = useSignal(true)

  return (
    <>
      <section class="title-section text-center">
        <h1>{article.value.data.page.title}</h1>
        <h2>{article.value.data.page.subtitle}</h2>
      </section>

      <section class="title-section">
        <NoTips />
      </section>

      <section class="inner-section finance">
        <QDatoText data={article.value.data.page.content} />
      </section>

      <section class="inner-section">
        <h2 class="mb-2">Latest articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestArticle.value.data.allPages.map((a: any) => (
            <div class="card bg-primary text-primary-content">
              <div class="card-body">
                <h2 class="card-title">{a.title}</h2>
                <div class="card-actions justify-end">
                  <Link href={a.slug} class="btn">
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showAlert.value && (
        <div
          role="alert"
          class="alert alert-info z-[999] fixed bottom-2 w-[98%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Italian content</span>
          <div>
            <button
              class="btn btn-sm btn-primary"
              onClick$={() => (showAlert.value = false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
})

export const head: DocumentHead = ({ resolveValue, params }) => {
  const article = resolveValue(useArticle)
  const seo = article.data.page.seo
  const metaTile = seo.find((item: any) => item.tag === 'title')
  const metas = seo.filter((item: any) => item.tag === 'meta')
  return {
    title: metaTile.content,
    meta: metas.map((item: any) => {
      return {
        name: item.attributes.property,
        content: item.attributes.content,
      }
    }),
  }
}
