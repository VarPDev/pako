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
import styles from './finance.css?inline'

interface ItemProps {
  page: any
  latestArticle?: any[]
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
        class="cover-section text-center"
        style={"background-image: url('" + props.page.cover?.url + "')"}
      >
        <div class="content">
          <h1>{props.page.title}</h1>
          <h2>{props.page.subtitle}</h2>
        </div>
      </section>

      <section class="title-section">
        <NoTips />
      </section>

      <section class="inner-section finance">
        <QDatoText data={props.page.content} />
      </section>

      {props.latestArticle && (
        <section class="inner-section">
          <h2 class="mb-2">Latest articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.latestArticle.map((a: any) => (
              <div class="card bg-primary text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">{a.title}</h2>
                  <div class="card-actions justify-end">
                    <Link href={a.slug} class="btn">
                      Scopri di più
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {showAlert.value && (
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
