import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import styles from './linkItem.module.css'

interface ItemProps {
  links: Array<any>
  referrer?: string
}

export const LinkItem = component$<ItemProps>(props => {
  return (
    <>
      <ul>
        {props.links.map(link => (
          <li key={link.id} class="mb-4">
            <Link
              class="link-container flex items-center justify-between transition duration-200 font-bold bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-2 w-100 text-white rounded-lg pl-4 md:px-4"
              href={link.url}
              target="_blank"
              rel="noopener"
              data-goatcounter-click="link-item"
              data-goatcounter-title={link.title}
              data-goatcounter-referrer={props.referrer || 'referrer'}
            >
              <span
                class={styles.icon + ' p-2'}
                dangerouslySetInnerHTML={link.svg}
              ></span>
              <span>{link.title}</span>
              <span
                class={styles.icon + ' p-2 invisible opacity-0'}
                dangerouslySetInnerHTML={link.svg}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
})
