import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
interface ItemProps {
  limit?: number
  items: Array<any>
  referrer?: string
}

export const Cards = component$<ItemProps>(props => {
  let cards = [...props.items]

  if (props.limit) {
    cards = cards.splice(0, props.limit)
  }

  return (
    <>
      <div>
        <div class="grid md:grid-cols-3 justify-items-center gap-12">
          {cards.map(c => (
            <Link
              key={c.id}
              href={c.href}
              target="_blank"
              aria-label={c.action}
              class="card bg-base-100 shadow-xl image-full w-full max-w-[18rem]"
              data-goatcounter-click="click-card"
              data-goatcounter-title={c.title}
              data-goatcounter-referrer={props.referrer || 'referrer'}
            >
              {c.image && (
                <figure>
                  <img
                    height={250}
                    width={250}
                    src={c.image}
                    alt={c.altImage}
                  />
                </figure>
              )}
              <div class="card-body">
                <h2 class="card-title">{c.title}</h2>
                <p>
                  {c.description}
                  <br />
                  <br />
                  {/* TODO: bg-color non wor dynamically */}
                  {/* ${c.color} */}
                  <span
                    class={`bg-secondary text-black rounded-3xl p-1 text-xs`}
                  >
                    {c.type}
                  </span>
                </p>
                <div class="card-actions justify-end">
                  <label class="btn btn-square btn-outline btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link h-3 w-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </label>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
})
