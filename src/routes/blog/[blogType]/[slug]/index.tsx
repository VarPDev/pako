import { component$ } from '@builder.io/qwik'
import {
  routeLoader$,
  StaticGenerateHandler,
  useLocation,
  type DocumentHead,
} from '@builder.io/qwik-city'
import { BlogComponent } from '~/components/blog/blogComponent'
import { articleDetailApi, pagesSlugsApi } from '~/services/graph-ql.service'
import { BlogTypes } from '~/utils/helpers'

export const useArticle = routeLoader$(async requestEvent => {
  const { slug, blogType } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi(slug, blogType, token || '')
})

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const token = env.get('DATO_CMS_TOKEN')
  const slugs = []

  for (const type of BlogTypes) {
    const res = await pagesSlugsApi(token ?? '', type)
    slugs.push(...res.data.allPages)
  }

  return {
    params: slugs.map((a: any) => {
      return { slug: a.slug, blogType: a.blogType }
    }),
  }
}

export default component$(() => {
  const loc = useLocation()
  const article = useArticle()

  return (
    <>
      <BlogComponent
        urlBlogBasePath={'blog/' + loc.params.blogType}
        blogType={loc.params.blogType}
        showFinanceWarn={loc.params.blogType === 'finance'}
        page={article.value.data.page}
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
