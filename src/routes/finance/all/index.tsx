import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import BlogHomeComponent from '~/components/blog/blogHomeComponent'
import { listArticles } from '~/services/graph-ql.service'

// export const useArticles = routeLoader$(async requestEvent => {
//   return await getArticles({
//     devToApiKey: requestEvent.env.get('DEV_TO_API_KEY'),
//   })
// })

export const useListFinanceArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return listArticles(token || '', 'finance')
})

export default component$(() => {
  return (
    <>
      <BlogHomeComponent urlBlogBasePath="finance" blogType={'finance'} />
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
