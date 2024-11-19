import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Header = component$(() => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex={0} class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  data-goatcounter-click="open-articles"
                  data-goatcounter-title="Open Articles"
                  data-goatcounter-referrer="header"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  data-goatcounter-click="open-projects"
                  data-goatcounter-title="Open Projects"
                  data-goatcounter-referrer="header"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/Pasquale_De_Lucia-Resume.pdf"
                  target="_blank"
                  data-goatcounter-click="get-resume"
                  data-goatcounter-title="Get Resume"
                  data-goatcounter-referrer="header"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  data-goatcounter-click="open-finance"
                  data-goatcounter-title="Open Finance"
                  data-goatcounter-referrer="header"
                >
                  Personal finance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <Link href="/" class="normal-case text-xl text-gradient-hover">
            Nyruchi
          </Link>
        </div>
        <div class="navbar-end">
          {/* <label for="cat-spawn" class="h-0 w-0 text-[0px]">
            Try
          </label>
          <input
            type="checkbox"
            class="toggle"
            id="cat-spawn"
            onClick$={() => (props.show.value = !props.show.value)}
          /> */}
        </div>
      </div>
    </>
  )
})
