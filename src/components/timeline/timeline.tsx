import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Ref, observeElement } from "~/utils/helpers";

interface ItemProps {
  items: Array<any>;
}

export const Timeline = component$<ItemProps>((props) => {
  // if I move useSignal inside map vite wirte a warning in console
  const createSignal = useSignal;

  const refs: Array<Ref> = props.items.map((item) => {
    return {
      el: createSignal<Element>(),
      isVisible: createSignal<boolean>(true),
      observer: null,
    };
  });

  useVisibleTask$(() => {
    observeElement(refs);
  });

  return (
    <>
      <div class="container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          {/* <div
              class="border-2-2 border-secondary absolute h-full border left-5 md:right-1/2"
              style="border-radius: 1%;"
            ></div> */}
          <div
            class="border-2-2 border-secondary absolute h-full border left-5 md:left-1/2"
            style="border-radius: 1%;"
          ></div>
          {props.items.map((w, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  key={w.id}
                  ref={refs[index].el}
                  class={`mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline
                  animation
                  ${refs[index].isVisible.value && "isVisible"}`}
                >
                  <div class="order-1 w-0 md:w-5/12"></div>
                  <div class="order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p class="mb-3 text-base text-secondary">{w.startDate}</p>
                    <h3 class="mb-3 font-bold text-lg md:text-2xl">
                      {w.title}
                    </h3>
                    <p class="mb-3 font-bold text-md md:text-xl">{w.role}</p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      {w.description}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={w.id}
                  ref={refs[index].el}
                  class={`mb-8 flex justify-between items-center w-full right-timeline animation
                  ${refs[index].isVisible.value && "isVisible"}`}
                >
                  <div class="order-1 w-0 md:w-5/12"></div>
                  <div class="order-1  w-full md:w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-secondary">{w.startDate}</p>
                    <h3 class="mb-3 font-bold text-lg md:text-2xl">
                      {w.title}
                    </h3>
                    <p class="mb-3 font-bold text-md md:text-xl">{w.role}</p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      {w.description}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
});
