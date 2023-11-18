import { Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface ItemProps {
  show: Signal<boolean>;
}

export const Header = component$<ItemProps>((props) => {
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
                {/* reload={true}
                prefetch={true}
                replaceState={true} */}
                <Link href="/">Homepage</Link>
              </li>
              <li>
                {/* reload={true}
                prefetch={true}
                replaceState={true} */}
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/Pasquale_De_Lucia-Resume.pdf" target="_blank">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <Link href="/" class="btn btn-ghost normal-case text-xl">
            Nyruchi
          </Link>
        </div>
        <div class="navbar-end">
          <label for="cat-spawn" class="h-0 w-0 text-[0px]">
            Try
          </label>
          <input
            type="checkbox"
            class="toggle"
            id="cat-spawn"
            onClick$={() => (props.show.value = !props.show.value)}
          />

          {/* <button
            onClick$={() => (props.show.value = !props.show.value)}
            class="btn btn-ghost btn-circle"
          >
            <div class="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}
        </div>
      </div>
    </>
  );
});
