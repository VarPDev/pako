import { component$, useStyles$ } from '@builder.io/qwik'
import {
  routeLoader$,
  StaticGenerateHandler,
  type DocumentHead,
} from '@builder.io/qwik-city'
import { NoTips } from '~/components/finance/no-tips/no-tips'
import { QDatoText } from '~/integrations/react/QDatoText'
import { articleDetailApi, pagesSlugsApi } from '~/services/graph-ql.service'
import styles from '../finance.css?inline'

export const useArticle = routeLoader$(async requestEvent => {
  const { slug } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi(slug, token || '')
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
  useStyles$(styles)
  const article = useArticle()

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
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pasquale De Lucia - Full-stack engineer',
  meta: [
    {
      name: 'description',
      content:
        'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
    },
  ],
}
