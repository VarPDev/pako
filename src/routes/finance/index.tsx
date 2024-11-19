import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { QDatoText } from '~/integrations/react/QDatoText'
import { articleDetailApi } from '~/services/graph-ql.service'

export const useArticle = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return articleDetailApi('finance', token || '')
})

export default component$(() => {
  const article = useArticle()

  return (
    <>
      <section class="title-section text-center">
        <h1>Finance</h1>
        <h2>Find out what I write about</h2>
      </section>

      <section class="inner-section">
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
