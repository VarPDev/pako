import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { observeSingleElement } from "~/utils/helpers";

export const AnimatedComp = component$(() => {
  const ref = useSignal<Element>();
  const isVisible = useSignal<boolean>(false);

  const refObj = {
    el: ref,
    isVisible: isVisible,
    observer: null,
  };

  useVisibleTask$(() => {
    observeSingleElement(refObj);
  });

  return (
    <>
      <div
        ref={refObj.el}
        class={`w-full animation
      ${refObj.isVisible.value && "isVisible"}`}
      >
        <Slot />
      </div>
    </>
  );
});
