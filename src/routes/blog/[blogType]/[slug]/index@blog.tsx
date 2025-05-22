import { component$ } from '@builder.io/qwik'
import {
  routeLoader$,
  StaticGenerateHandler,
  useLocation,
  type DocumentHead,
} from '@builder.io/qwik-city'
import { BlogComponent } from '~/components/blog/blogComponent'
import {
  articleDetailApi,
  commentsByPageSlugApi,
  pagesSlugsApi,
} from '~/services/graph-ql.service'
import { BlogTypes } from '~/utils/helpers'

export const useArticle = routeLoader$(async requestEvent => {
  const { slug, blogType } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')

  const article = articleDetailApi(slug, blogType, token || '')
  const comments = commentsByPageSlugApi(
    token || '',
    (await article).data.page.id,
  )
  return { article: await article, comments: await comments }
})

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const token = env.get('DATO_CMS_TOKEN')
  const slugs = []

  for (const type of BlogTypes) {
    const res = await pagesSlugsApi(token ?? '', type)
    slugs.push(...res.data.allPages, { slug: 'all', blogType: type })
  }

  return {
    params: slugs.map((a: any) => {
      return { slug: a.slug, blogType: a.blogType }
    }),
  }
}

export default component$(() => {
  const loc = useLocation()
  const resArticle = useArticle()

  return (
    <>
      <BlogComponent
        urlBlogBasePath={'blog/' + loc.params.blogType}
        blogType={loc.params.blogType}
        showFinanceWarn={loc.params.blogType === 'finance'}
        page={resArticle.value.article.data.page}
        comments={resArticle.value.comments.data.allComments}
        showComment={true}
      />
    </>
  )
})

export const head: DocumentHead = ({ resolveValue, params }) => {
  const resArticle = resolveValue(useArticle)
  const seo = resArticle.article.data.page.seo
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
