import { component$ } from "@builder.io/qwik";
import { AnimatedComp } from "../animated-component/animated-component";

interface ItemProps {
  items: Array<any>;
}

export const Timeline = component$<ItemProps>((props) => {
  return (
    <>
      <div class="container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 border-secondary absolute h-full border left-5 md:left-1/2"
            style="border-radius: 1%;"
          ></div>
          {props.items.map((w, index) => {
            if (index % 2 === 0) {
              return (
                <AnimatedComp pop={true} key={w.id}>
                  <div class="mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline">
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
                </AnimatedComp>
              );
            } else {
              return (
                <AnimatedComp pop={true} key={w.id}>
                  <div class="mb-8 flex justify-between items-center w-full right-timeline">
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
                </AnimatedComp>
              );
            }
          })}
        </div>
      </div>
    </>
  );
});
