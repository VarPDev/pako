import { component$ } from '@builder.io/qwik'
import {
  routeLoader$,
  StaticGenerateHandler,
  useLocation,
  type DocumentHead,
} from '@builder.io/qwik-city'
import { BlogComponent } from '~/components/blog/blogComponent'
import { articleDetailApi, latestArticles } from '~/services/graph-ql.service'
import { BlogTypes } from '~/utils/helpers'

export const onStaticGenerate: StaticGenerateHandler = () => {
  return {
    params: BlogTypes.map(blogType => {
      return {
        blogType,
      }
    }),
  }
}

export const useArticle = routeLoader$(async requestEvent => {
  const { blogType } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi(blogType, blogType, token || '')
})

export const useLatestArticles = routeLoader$(async requestEvent => {
  const { blogType } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return latestArticles(token || '', blogType)
})

export default component$(() => {
  const loc = useLocation()
  const article = useArticle()
  const latestArticle = useLatestArticles()

  return (
    <>
      <BlogComponent
        urlBlogBasePath={'blog/' + loc.params.blogType}
        blogType={loc.params.blogType}
        page={article.value.data.page}
        latestArticle={latestArticle.value.data.allPages}
        showFinanceWarn={loc.params.blogType === 'finance'}
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
