import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./santa.css?inline";

export const Santa = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="santa-container">
        <div class="ears"></div>
        <div class="beard"></div>
        <div class="mouth"></div>
        <div class="hat"></div>
        <div class="hair"></div>
        <div class="santa">
          <div class="moustache"></div>
        </div>
      </div>
    </>
  );
});
