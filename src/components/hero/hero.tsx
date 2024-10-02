import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import converter from 'number-to-words'
import ImgPako from '/src/media/pako_compressed.JPG?jsx'

interface ItemProps {
  role: string
  company: string
}

export const Hero = component$<ItemProps>(props => {
  const currentYear = new Date().getFullYear()
  const startYear = new Date('1/1/2015').getFullYear()
  const yearWorked = converter.toWords(currentYear - startYear)
  const yearWorkedFormatted =
    yearWorked.charAt(0).toUpperCase() + yearWorked.slice(1)

  return (
    <>
      <div class="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <ImgPako
            loading="eager"
            alt="Pasquale De Lucia picture"
            class="max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl"
          />
          <div class="prose m-6 md:my-0">
            <h1 class="text-5xl font-bold">Pasquale De Lucia</h1>
            <p class="text-xl text-gradient">
              Web Wizard and <strong>JavaScript Lover</strong>
            </p>
            <p>
              I craft digital wonders as a {props.role} at {props.company}.
            </p>
            <p>
              With a solid {yearWorked} years of{' '}
              <strong>web development</strong> under my belt, I'm here to make
              your online dreams a reality.
            </p>
            <p>
              <Link
                href="#links"
                class="btn btn-primary text-white"
                data-goatcounter-click="get-resume"
                data-goatcounter-title="Get Resume"
                data-goatcounter-referrer="index-hero"
              >
                Get resume
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
})
