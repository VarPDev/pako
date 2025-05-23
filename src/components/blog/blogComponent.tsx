import {
  $,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { reset, SubmitHandler, useForm, valiForm$ } from '@modular-forms/qwik'
import { InferInput, minLength, object, pipe, string } from 'valibot'
import { NoTips } from '~/components/finance/no-tips/no-tips'
import { QDatoText } from '~/integrations/react/QDatoText'
import { useCommentFormLoader } from '~/routes/layout-blog'
import styles from '../../blog.css?inline'
import { Articles } from '../articles/articles'
import { InnerSectionComponent } from '../inner-section/innerSectionComponent'

const CommentItem = component$(
  ({
    comment,
    onAnswer,
  }: {
    comment: any
    onAnswer: (comment: any) => void
  }) => {
    return (
      <div class="comment-item mb-4">
        <div class="flex justify-between items-center">
          <div>
            <div class="comment-name font-bold">{comment.name}</div>
            <div class="comment-text">{comment.message}</div>
          </div>
          <button
            class="btn btn-primary text-white col-start-2"
            type="button"
            onClick$={() => {
              onAnswer(comment)
            }}
            data-goatcounter-click="answer-comment"
            data-goatcounter-title="Answer Comment"
            data-goatcounter-referrer="referrer"
          >
            Answer
          </button>
        </div>

        {comment.children && comment.children.length > 0 && (
          <div class="pl-4 mt-2">
            {comment.children.map((child: any) => (
              <CommentItem key={child.id} comment={child} onAnswer={onAnswer} />
            ))}
          </div>
        )}
      </div>
    )
  },
)

const CommentSchema = object({
  name: pipe(string('Must be a string'), minLength(5, 'Minimun length 5.')),
  message: pipe(string('Must be a string'), minLength(5, 'Minimun length 5.')),
})

export type CommentForm = InferInput<typeof CommentSchema>

interface ItemProps {
  page: any
  urlBlogBasePath: string
  blogType: string
  latestArticle?: any[]
  comments?: any[]
  showFinanceWarn?: boolean
}

function buildCommentTree(comments: any[]): any[] {
  const map = new Map<string, any>()
  const roots: Comment[] = []

  for (const comment of comments) {
    map.set(comment.id, { ...comment, children: [] })
  }

  for (const comment of comments) {
    if (comment.parentComment && comment.parentComment.id) {
      const parent = map.get(comment.parentComment.id)
      const current = map.get(comment.id)
      if (parent && current) {
        parent.children = [...(parent.children || []), current]
      }
    } else {
      const rootComment = map.get(comment.id)
      if (rootComment) {
        roots.push(rootComment)
      }
    }
  }

  return roots
}

export const BlogComponent = component$<ItemProps>(props => {
  useStyles$(styles)
  const sendingComment = useSignal(false)
  const showError = useSignal(false)
  const showSuccess = useSignal(false)
  const answerTo = useSignal<any>(null)

  const [commentForm, { Form, Field }] = useForm<CommentForm>({
    loader: useCommentFormLoader(),
    // action: useFormAction(),
    validate: valiForm$(CommentSchema),
  })

  const showAlert = useSignal(false)

  const commentList = useSignal(buildCommentTree(props.comments || []))
  const flatComments = useSignal(props.comments || [])

  const handleSubmit = $<SubmitHandler<CommentForm>>(async (values, event) => {
    try {
      // Runs on client
      sendingComment.value = true
      const res = await fetch(
        `${import.meta.env.PUBLIC_COMMENT_FUNCTION}?name=${values.name}&message=${values.message}&pageId=${props.page.id}${
          answerTo.value ? `&parentCommentId=${answerTo.value.id}` : ''
        }`,
      )
      sendingComment.value = false

      if (res && res.ok) {
        const data = await res.json()

        if (data.success) {
          fetch(
            `${import.meta.env.PUBLIC_NOTIFICATION_COMMENT_TELEGRAM_FUNCTION}?name=${values.name}&page=https://pasqualedelucia.com/blog/${props.blogType}/${props.page.slug}&message=${values.message}`,
          )
            .then()
            .catch(e => {
              console.error('🚀 ~ send telegram notification ~ e:', e)
            })

          reset(commentForm)

          const newComment = {
            id: data.record.id,
            name: values.name,
            message: values.message,
            _createdAt: new Date().toISOString(),
            _updatedAt: new Date().toISOString(),
            likes: 0,
            dislikes: 0,
            parentComment: answerTo.value ? { id: answerTo.value.id } : null,
            children: [],
          }

          flatComments.value = [newComment, ...flatComments.value]
          commentList.value = buildCommentTree(flatComments.value)

          showSuccess.value = true

          setTimeout(() => {
            showSuccess.value = false
          }, 3000)
        } else {
          showError.value = true
        }
      } else {
        showError.value = true
      }
    } catch (e) {
      console.error('🚀 ~ handleSubmit ~ e:', e)
      sendingComment.value = false
      showError.value = true
    }
  })

  const onCloseWarning = $(() => {
    showAlert.value = false
    localStorage.setItem('pako-ita-warn', 'closed')
  })

  const $onAnswer = $((comment: any) => {
    const commentForm = document.getElementById('comment-form')
    if (commentForm) {
      commentForm.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        window.scrollBy({ top: -100, behavior: 'smooth' })
      }, 0)
    }
    answerTo.value = comment
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

      <InnerSectionComponent showCta={false} sectionClass="blog-write-comment">
        {answerTo.value && (
          <div class="mb-2">
            You are responding to:{' '}
            <span class="font-bold">{answerTo.value.name}</span>
          </div>
        )}
        <Form
          onSubmit$={handleSubmit}
          id="comment-form"
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Field name="name">
            {(field, props) => (
              <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
                <label class="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    {...props}
                    value={field.value}
                    type="text"
                    class="grow w-full"
                    placeholder="Name"
                  />
                </label>
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <Field name="message">
            {(field, props) => (
              <div class="flex flex-col gap-2 col-span-2">
                <textarea
                  {...props}
                  value={field.value}
                  placeholder="Message"
                  class="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
                {field.error && <div class="text-red-500">{field.error}</div>}
              </div>
            )}
          </Field>
          <button
            class="btn btn-primary text-white col-start-2"
            type="submit"
            disabled={sendingComment.value}
            data-goatcounter-click="send-comment"
            data-goatcounter-title="Send Comment"
            data-goatcounter-referrer="referrer"
          >
            {sendingComment.value && (
              <span class="loading loading-spinner"></span>
            )}
            Comment
          </button>
        </Form>
      </InnerSectionComponent>

      {commentList && commentList.value && commentList.value.length && (
        <InnerSectionComponent showCta={false} sectionClass="blog-comments">
          {commentList.value.map(comment => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                onAnswer={$onAnswer}
              />
            )
          })}
        </InnerSectionComponent>
      )}

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
      {(showSuccess.value || showError.value) && (
        <div class="toast toast-end z-[999]">
          {showError.value && (
            <div class="alert alert-error gap-0">
              <div class="flex gap-2 justify-beetwen">
                <div class="flex-1">
                  <div>There was an error during comment send.</div>
                  <div>
                    Write directly to{' '}
                    <a
                      class="underline"
                      href="mailto:pasquale.delucia96@gmail.com"
                    >
                      pasquale.delucia96@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  class="btn btn-xs btn-circle btn-outline"
                  onClick$={() => {
                    showError.value = false
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {showSuccess.value && (
            <div class="alert alert-success gap-0">
              <span>Comment sent successfully.</span>
            </div>
          )}
        </div>
      )}
    </>
  )
})
