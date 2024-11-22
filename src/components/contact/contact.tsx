import { $, component$, useSignal } from '@builder.io/qwik'
import { reset, SubmitHandler, useForm, valiForm$ } from '@modular-forms/qwik'
import { email, InferInput, minLength, object, pipe, string } from 'valibot'
import { useFormLoader } from '~/routes/layout'

const ContactSchema = object({
  email: pipe(
    string('Must be a string'),
    minLength(1, 'Please enter your email.'),
    email('The email address is badly formatted.'),
  ),
  name: pipe(
    string('Must be a string'),
    minLength(1, 'Please enter your name.'),
  ),
  message: pipe(
    string('Must be a string'),
    minLength(1, 'Please enter your message.'),
  ),
})

export type ContactForm = InferInput<typeof ContactSchema>

// export const useFormAction = formAction$<ContactForm>(async values => {
//   // Runs on server
//   try {
//     const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!)
//     await bot.telegram.sendMessage(
//       process.env.TELEGRAM_CHANNEL_ID!,
//       `*${values.name}*\n\n${values.email}\n\n${values.message}`.replaceAll(
//         '.',
//         '\\.',
//       ),
//       { parse_mode: 'MarkdownV2' },
//     )
//   } catch (error) {
//     console.log('🚀 ~ useFormAction ~ error:', error)
//   }
// }, valiForm$(ContactSchema))

// export const sendTelegramNotification = server$(async function (values) {
//   try {
//     const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!)
//     await bot.telegram.sendMessage(
//       process.env.TELEGRAM_CHANNEL_ID!,
//       `*${values.name}*\n\n${values.email}\n\n${values.message}`.replaceAll(
//         '.',
//         '\\.',
//       ),
//       { parse_mode: 'MarkdownV2' },
//     )
//     return true
//   } catch (error) {
//     console.error('🚀 ~ useFormAction ~ error:', error)
//     return false
//   }
// })

export const Contact = component$<{ referral: string }>(props => {
  const sendingNotification = useSignal(false)
  const showError = useSignal(false)
  const showSuccess = useSignal(false)

  const [contactForm, { Form, Field, FieldArray }] = useForm<ContactForm>({
    loader: useFormLoader(),
    // action: useFormAction(),
    validate: valiForm$(ContactSchema),
  })

  const handleSubmit = $<SubmitHandler<ContactForm>>(async (values, event) => {
    try {
      // Runs on client
      sendingNotification.value = true
      const success = await fetch(
        `${import.meta.env.PUBLIC_NOTIFICATION_TELEGRAM_FUNCTION}?name=${values.name}&email=${values.email}&message=${values.message}`,
      )
      sendingNotification.value = false

      if (success) {
        reset(contactForm)
        showSuccess.value = true
        setTimeout(() => {
          showSuccess.value = false
        }, 3000)
      } else {
        showError.value = true
      }
    } catch (e) {
      sendingNotification.value = false
      showError.value = true
    }
  })

  return (
    <>
      <div class="container mx-auto">
        <div class="card bg-base-100 shadow-xl image-full w-full">
          <div class="card-body">
            <div class="flex items-center gap-8 flex-col md:flex-row">
              <svg
                class="w-16 md:w-40 rotate-[270deg]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 323.057 323.057"
                xml:space="preserve"
              >
                <path
                  class="fill-primary"
                  d="M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343zM144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707z"
                />
                <path
                  class="fill-primary"
                  d="M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73z"
                />
              </svg>

              <div>
                <h2 class="card-title text-l md:text-2xl mb-6">
                  Do you want to build castles? Let's do it together!
                </h2>
                <Form
                  onSubmit$={handleSubmit}
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
                        {field.error && (
                          <div class="text-red-500">{field.error}</div>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="email">
                    {(field, props) => (
                      <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <label class="input input-bordered flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            {...props}
                            value={field.value}
                            type="email"
                            class="grow w-full"
                            placeholder="Email"
                          />
                        </label>
                        {field.error && (
                          <div class="text-red-500">{field.error}</div>
                        )}
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
                        {field.error && (
                          <div class="text-red-500">{field.error}</div>
                        )}
                      </div>
                    )}
                  </Field>
                  <button
                    class="btn btn-primary text-white col-start-2"
                    type="submit"
                    disabled={sendingNotification.value}
                    data-goatcounter-click="send-email"
                    data-goatcounter-title="Send Email"
                    data-goatcounter-referrer={props.referral}
                  >
                    {sendingNotification.value && (
                      <span class="loading loading-spinner"></span>
                    )}
                    Contact me
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(showSuccess.value || showError.value) && (
        <div class="toast toast-end z-[999]">
          {showError.value && (
            <div class="alert alert-error gap-0">
              <div class="flex gap-2 justify-beetwen">
                <div class="flex-1">
                  <div>There was an error during message send.</div>
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
              <span>Message sent successfully.</span>
            </div>
          )}
        </div>
      )}
    </>
  )
})
