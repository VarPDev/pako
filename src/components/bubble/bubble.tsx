import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './bubble.css?inline'

export const Bubble = component$(() => {
  useStylesScoped$(styles)

  return (
    <>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
})
