import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import styles from './stacks.module.css'

interface ItemProps {
  title: string
  stacks: Array<any>
}

export const Stacks = component$<ItemProps>(props => {
  return (
    <>
      <div class={'container mx-auto ' + styles.container}>
        <h3 class="text-center mb-4 text-xl">{props.title}</h3>
        <div class="flex flex-wrap justify-center gap-12">
          {props.stacks.map(s => (
            <Link
              href={s.href}
              target="_blank"
              key={s.id}
              aria-label={s.href}
              class="w-full max-w-[3rem] min-w-[2rem]"
            >
              <div dangerouslySetInnerHTML={s.svg}></div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
})
