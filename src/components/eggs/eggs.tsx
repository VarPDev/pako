import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './eggs.css?inline'

export const Eggs = component$(() => {
  useStylesScoped$(styles)

  return (
    <>
      <div class="eggs">
        <div class="egg egg-left">
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
        <div class="egg egg-right"></div>
      </div>
    </>
  )
})
