import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { articleDetailApi, latestArticles } from '~/services/graph-ql.service'
import { BlogComponent } from '../../components/blog/blogComponent'

export const useArticle = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi('finance', 'finance', token || '')
})

export const useLatestArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return latestArticles(token || '', 'finance')
})

export default component$(() => {
  const article = useArticle()
  const latestArticle = useLatestArticles()

  return (
    <>
      <BlogComponent
        urlBlogBasePath="finance"
        page={article.value.data.page}
        latestArticle={latestArticle.value.data.allPages}
        showFinanceWarn={true}
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
