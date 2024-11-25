import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { format } from 'date-fns'
interface ItemProps {
  articles: Array<any>
  urlBlogBasePath: string
  referrer?: string
}

export const Articles = component$<ItemProps>(props => {
  const articles = [...props.articles]

  return (
    <>
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 justify-items-start gap-12">
          {articles.map(c => (
            // <Link href={`/blog/${c.slug}`} key={c.id}>
            <Link
              href={'/' + props.urlBlogBasePath + '/' + c.slug}
              key={c.id}
              data-goatcounter-click="open-article"
              data-goatcounter-title="Open Article"
              data-goatcounter-referrer={props.referrer || 'referrer'}
            >
              <article class="prose">
                <h3>{c.title}</h3>
                <p class="flex items-center gap-2">
                  {format(new Date(c._firstPublishedAt), 'MMM d, yyyy')}{' '}
                  <span class="bg-secondary text-black p-1 text-xs rounded uppercase">
                    {c.language}
                  </span>
                </p>
                <p>{c.subtitle}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
})
