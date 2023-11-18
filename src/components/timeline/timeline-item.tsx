import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Ref, observeElement } from "~/utils/helpers";

interface Item {
  startDate: string;
  company: string;
  role: string;
  description: string;
  isLeft: boolean;
}

interface ItemProps {
  item: Item;
}

export const TimelineItem = component$<ItemProps>((props) => {
  const item = props.item;

  const el = useSignal<Element>();
  const isVisible = useSignal<boolean>(false);

  const refs: Array<Ref> = [
    {
      el,
      isVisible,
      observer: null,
    },
  ];

  useVisibleTask$(() => {
    observeElement(refs);
  });

  return (
    <>
      {item.isLeft ? (
        <div
          ref={el}
          class={`mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline
              animation
              ${isVisible.value && "isVisible"}`}
        >
          <div class="order-1 w-0 md:w-5/12"></div>
          <div class="order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right">
            <p class="mb-3 text-base text-secondary">{item.startDate}</p>
            <h4 class="mb-3 font-bold text-lg md:text-2xl">{item.company}</h4>
            <p class="mb-3 font-bold text-md md:text-xl">{item.role}</p>
            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <div
          ref={el}
          class={`mb-8 flex justify-between items-center w-full right-timeline animation
              ${isVisible.value && "isVisible"}`}
        >
          <div class="order-1 w-0 md:w-5/12"></div>
          <div class="order-1  w-full md:w-5/12 px-1 py-4 text-left">
            <p class="mb-3 text-base text-secondary">{item.startDate}</p>
            <h4 class="mb-3 font-bold text-lg md:text-2xl">{item.company}</h4>
            <p class="mb-3 font-bold text-md md:text-xl">{item.role}</p>
            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
              {item.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
});
