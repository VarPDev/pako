import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { articleDetailApi, latestAsrticles } from '~/services/graph-ql.service'
import { BlogComponent } from './blogComponent'

export const useArticle = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi('finance', token || '')
})

export const useLatestArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return latestAsrticles(token || '')
})

export default component$(() => {
  const article = useArticle()
  const latestArticle = useLatestArticles()

  return (
    <>
      <BlogComponent
        page={article.value.data.page}
        latestArticle={latestArticle.value.data.allPages}
      />
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
