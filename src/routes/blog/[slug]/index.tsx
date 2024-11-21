import { component$ } from '@builder.io/qwik'
import {
  routeLoader$,
  StaticGenerateHandler,
  type DocumentHead,
} from '@builder.io/qwik-city'
import { BlogComponent } from '~/components/blog/blogComponent'
import { articleDetailApi, pagesSlugsApi } from '~/services/graph-ql.service'

export const useArticle = routeLoader$(async requestEvent => {
  const { slug } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi(slug, 'dev', token || '')
})

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const token = env.get('DATO_CMS_TOKEN')
  const slugs = await pagesSlugsApi(token ?? '')

  return {
    params: slugs.data.allPages.map((a: any) => {
      return { slug: a.slug }
    }),
  }
}

export default component$(() => {
  const article = useArticle()

  return (
    <>
      <BlogComponent page={article.value.data.page} />
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
