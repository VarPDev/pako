import { component$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import BlogHomeComponent from '~/components/blog/blogHomeComponent'
import { listArticles } from '~/services/graph-ql.service'

export const useListDevArticles = routeLoader$(async requestEvent => {
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return listArticles(token || '', 'dev')
})

export default component$(() => {
  return (
    <>
      <BlogHomeComponent urlBlogBasePath="blog" blogType={'dev'} />
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
