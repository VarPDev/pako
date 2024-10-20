import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { Articles } from '~/components/articles/articles'
import { getArticles } from '~/repository/articles'

export const useArticles = routeLoader$(async requestEvent => {
  return await getArticles({
    devToApiKey: requestEvent.env.get('DEV_TO_API_KEY'),
  })
})

export default component$(() => {
  const articles = useArticles()

  return (
    <>
      <section class="title-section text-center">
        <h1>Blog</h1>
        <h2>Find out what I write about</h2>
      </section>

      <section class="inner-section">
        <Articles articles={articles.value} referrer="page-articles" />
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
