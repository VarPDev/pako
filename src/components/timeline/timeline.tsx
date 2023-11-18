import { component$ } from "@builder.io/qwik";
import { TimelineItem } from "./timeline-item";

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
            return (
              <TimelineItem
                key={w.id}
                item={{ ...w, isLeft: index % 2 === 0 }}
              ></TimelineItem>
            );
          })}
        </div>
      </div>
    </>
  );
});
