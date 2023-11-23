import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { observeSingleElement } from '~/utils/helpers'

interface ItemProp {
  pop?: boolean
}

export const AnimatedComp = component$<ItemProp>(props => {
  const ref = useSignal<Element>()
  const isVisible = useSignal<boolean>(false)

  const refObj = {
    el: ref,
    isVisible: isVisible,
    observer: null,
  }

  useVisibleTask$(() => {
    observeSingleElement(refObj)
  })

  return (
    <>
      <div
        ref={refObj.el}
        class={`w-full animation ${props.pop && 'pop'}
      ${refObj.isVisible.value && 'isVisible'}`}
      >
        <Slot />
      </div>
    </>
  )
})
