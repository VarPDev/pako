import { $, component$, useSignal } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { Articles } from '~/components/articles/articles'
import { listArticles } from '~/services/graph-ql.service'

// export const useArticles = routeLoader$(async requestEvent => {
//   return await getArticles({
//     devToApiKey: requestEvent.env.get('DEV_TO_API_KEY'),
//   })
// })

export const useListDevArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return listArticles(token || '', 'dev')
})

export default component$(() => {
  const articles = useListDevArticles()
  const filteredArticles = useSignal([...articles.value.data.allPages])

  const search = useSignal('')
  const handleSearch$ = $((e: Event) => {
    search.value = (e.target as HTMLInputElement).value

    if (search.value) {
      const searchLowered = search.value.toLowerCase()
      filteredArticles.value = [
        ...articles.value.data.allPages.filter((article: any) => {
          return (
            article.title.toLowerCase().includes(searchLowered) ||
            article.subtitle.toLowerCase().includes(searchLowered)
          )
        }),
      ]
    } else {
      filteredArticles.value = [...articles.value.data.allPages]
    }
  })

  return (
    <>
      <section class="title-section text-center">
        <h1>Blog</h1>
        <h2>Find out what I write about</h2>
        <input
          type="text"
          placeholder="Search articles"
          class="input mt-4 w-full max-w-xs"
          value={search.value}
          onInput$={handleSearch$}
        />
      </section>

      <section class="inner-section">
        <Articles articles={filteredArticles.value} referrer="page-articles" />
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
