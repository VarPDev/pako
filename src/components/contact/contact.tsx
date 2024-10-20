import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Contact = component$(() => {
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
                <p class="text-m md:text-1xl flex gap-2 items-center flex-wrap">
                  pasquale.delucia96@gmail.com{' '}
                  <Link
                    class="btn btn-square btn-outline btn-xs"
                    href="mailto:pasquale.delucia96@gmail.com"
                    target="_blank"
                    aria-label="pasquale.delucia96@gmail.com"
                    data-goatcounter-click="send-email"
                    data-goatcounter-title="Send Email"
                    data-goatcounter-referrer="referrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link w-3 h-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
