import { Signal } from "@builder.io/qwik";

export interface Ref {
  el: Signal<Element | undefined>;
  isVisible: Signal<boolean>;
  observer: any;
}

export const observeElement = (refs: Array<Ref>) => {
  refs.forEach((ref) => {
    if (ref.el.value) {
      ref.observer = new IntersectionObserver(([entry]) => {
        ref.isVisible.value = entry.isIntersecting;

        if (ref.isVisible.value) {
          ref.observer.disconnect();
        }
      });

      ref.observer.observe(ref.el.value);
    }
  });
};

export const observeSingleElement = (ref: Ref) => {
  if (ref.el.value) {
    ref.observer = new IntersectionObserver(([entry]) => {
      ref.isVisible.value = entry.isIntersecting;

      if (ref.isVisible.value) {
        ref.observer.disconnect();
      }
    });

    ref.observer.observe(ref.el.value);
  }
};
