import { component$ } from '@builder.io/qwik'
import {
  routeLoader$,
  useLocation,
  type DocumentHead,
} from '@builder.io/qwik-city'
import BlogHomeComponent from '~/components/blog/blogHomeComponent'
import { listArticles } from '~/services/graph-ql.service'

export const useListArticles = routeLoader$(async requestEvent => {
  const { blogType } = requestEvent.params
  const token = requestEvent.env.get('DATO_CMS_TOKEN')
  return listArticles(token || '', blogType)
})

export default component$(() => {
  const loc = useLocation()

  return (
    <>
      <BlogHomeComponent
        urlBlogBasePath={'blog/' + loc.params.blogType}
        blogType={loc.params.blogType}
      />
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
