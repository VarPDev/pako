import {
  $,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { NoTips } from '~/components/finance/no-tips/no-tips'
import { QDatoText } from '~/integrations/react/QDatoText'
import { Articles } from '../articles/articles'
import { InnerSectionComponent } from '../inner-section/innerSectionComponent'
import styles from './blog.css?inline'

interface ItemProps {
  page: any
  urlBlogBasePath: string
  blogType: string
  latestArticle?: any[]
  showFinanceWarn?: boolean
}

export const BlogComponent = component$<ItemProps>(props => {
  useStyles$(styles)

  const showAlert = useSignal(false)

  const onCloseWarning = $(() => {
    showAlert.value = false
    localStorage.setItem('pako-ita-warn', 'closed')
  })

  useVisibleTask$(() => {
    const pakoItaWarn = localStorage.getItem('pako-ita-warn')
    showAlert.value = pakoItaWarn && pakoItaWarn === 'closed' ? false : true
  })

  return (
    <>
      <section
        class="cover-section text-center blog-content"
        style={"background-image: url('" + props.page.cover?.url + "')"}
      >
        <div class="content">
          <h1>{props.page.title}</h1>
          <h2>{props.page.subtitle}</h2>
        </div>
      </section>

      <section class="title-section">
        <div class="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              {props.page.slug === 'finance' || props.page.slug === 'dev' ? (
                'Blog'
              ) : (
                <Link href={'/' + props.urlBlogBasePath}>Blog</Link>
              )}
            </li>
            {props.page.slug !== 'finance' && props.page.slug !== 'dev' && (
              <li>{props.page.title}</li>
            )}
          </ul>
        </div>
      </section>

      {props.showFinanceWarn && (
        <section class="title-section">
          <NoTips />
        </section>
      )}

      <InnerSectionComponent showCta={false} sectionClass="blog-content">
        <QDatoText data={props.page.content} />
      </InnerSectionComponent>

      {props.latestArticle && (
        <>
          <section class="title-section text-center">
            <h2 class="font-bold text-3xl uppercase">Latest articles</h2>
          </section>

          <InnerSectionComponent
            showCta={true}
            ctaHref={'/' + props.urlBlogBasePath + '/all'}
            ctaLabel="Scopri tutti gli articoli"
            gcClick={'more-' + props.blogType + '-articles'}
            gcTitle={'More ' + props.blogType + ' Articles'}
            gcReferrer="referrer"
          >
            <Articles
              urlBlogBasePath={props.urlBlogBasePath}
              articles={props.latestArticle}
              referrer="index-article"
            />
          </InnerSectionComponent>
        </>
      )}

      {showAlert.value && props.page.language === 'ita' && (
        <div
          role="alert"
          class="alert alert-info z-[999] fixed bottom-2 w-[98%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Italian content</span>
          <div>
            <button class="btn btn-sm btn-primary" onClick$={onCloseWarning}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
})
