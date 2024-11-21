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
      <section class="title-section flex flex-col items-center gap-4">
        <h1>Blog</h1>
        <h2>Find out what I write about</h2>
        <label class="input flex items-center gap-2 w-full max-w-xs">
          <input
            type="text"
            placeholder="Search articles"
            class="grow"
            value={search.value}
            onInput$={handleSearch$}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
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
