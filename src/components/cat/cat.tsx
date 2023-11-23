import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./cat.css?inline";

export const Cat = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="cat-background">
        <div class="ear ear--left"></div>
        <div class="ear ear--right"></div>
        <div class="face">
          <div class="eye eye--left">
            <div class="eye-pupil"></div>
          </div>
          <div class="eye eye--right">
            <div class="eye-pupil"></div>
          </div>
          <div class="muzzle"></div>
        </div>
      </div>
    </>
  );
});
