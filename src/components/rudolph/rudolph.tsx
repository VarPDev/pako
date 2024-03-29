import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './rudolph.css?inline'

export const Rudolph = component$(() => {
  useStylesScoped$(styles)

  return (
    <>
      <div class="reindeer">
        <div class="antler">
          <div class="hook"></div>
          <div class="hook"></div>
          <div class="hook"></div>
        </div>
        <div class="antler antler--right">
          <div class="hook"></div>
          <div class="hook"></div>
          <div class="hook"></div>
        </div>
        <div class="body">
          <div class="hand"></div>
          <div class="hand hand--right"></div>
          <div class="legs"></div>
          <div class="foot"></div>
          <div class="foot foot--right"></div>
        </div>
        <div class="head">
          <div class="ear"></div>
          <div class="ear ear--right"></div>
          <div class="face"></div>
          <div class="eye"></div>
          <div class="eye eye--right"></div>
          <div class="nose"></div>
        </div>
      </div>
    </>
  )
})
