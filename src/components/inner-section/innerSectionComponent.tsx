import { component$, Slot } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

interface ItemProps {
  showCta: boolean
  ctaLabel?: string
  ctaHref?: string
  gcClick?: string
  gcTitle?: string
  gcReferrer?: string
  sectionClass?: string
}

export const InnerSectionComponent = component$<ItemProps>(props => {
  return (
    <>
      <section class={'inner-section ' + props.sectionClass}>
        <Slot />

        {props.showCta && (
          <p class="flex justify-center pt-6">
            <Link
              href={props.ctaHref}
              aria-label={props.ctaLabel}
              class="btn btn-primary text-white"
              data-goatcounter-click={props.gcClick}
              data-goatcounter-title={props.gcTitle}
              data-goatcounter-referrer={props.gcReferrer}
            >
              {props.ctaLabel}
            </Link>
          </p>
        )}
      </section>
    </>
  )
})
