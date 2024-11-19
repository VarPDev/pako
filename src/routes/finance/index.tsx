import { component$, useStyles$ } from '@builder.io/qwik'
import { Link, routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
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

  return (
    <>
      <section class="title-section text-center">
        <h1>Finance</h1>
        <h2>Find out what I write about</h2>
      </section>

      <section class="inner-section finance">
        <QDatoText data={article.value.data.page.content} />
      </section>

      <section class="inner-section">
        <h2 class="mb-2">Latest articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2">
          {latestArticle.value.data.allPages.map((a: any) => (
            <div class="card bg-primary text-primary-content">
              <div class="card-body">
                <h2 class="card-title">{a.title}</h2>
                <div class="card-actions justify-end">
                  <Link href={a.slug} class="btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
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
