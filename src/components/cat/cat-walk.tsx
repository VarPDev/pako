import { component$ } from "@builder.io/qwik";

export const CatWalk = component$(() => {
  return (
    <>
      <div class="cat-walk-container">
        <div id="tail"></div>
        <div id="tail-mask">WOW</div>
        <div id="tail-end"></div>

        <div id="body">
          <div class="ear" id="ear-left">
            <div class="ear-inner" id="ear-inner-left"></div>
          </div>
          <div class="ear" id="ear-right">
            <div class="ear-inner" id="ear-inner-right"></div>
          </div>

          <div id="mask"></div>

          <div id="patch">
            <div class="fur"></div>
            <div class="fur"></div>
            <div class="fur"></div>
          </div>

          <div id="eyes">
            <div class="eye" id="eye-left">
              <div class="shine" id="shine-left"></div>
            </div>
            <div class="eye" id="eye-right">
              <div class="shine" id="shine-right"></div>
            </div>
          </div>

          <div id="whisk-left">
            <div class="whisker" id="whisk-one"></div>
            <div class="whisker"></div>
            <div class="whisker" id="whisk-three"></div>
          </div>

          <div id="nose"></div>

          <div id="whisk-right">
            <div class="whisker" id="whisk-four"></div>
            <div class="whisker"></div>
            <div class="whisker" id="whisk-six"></div>
          </div>

          <div id="smile">
            <div id="smile-left-align">
              <div id="smile-left"></div>
              <div id="mask-left"></div>
            </div>

            <div id="smile-right-align">
              <div id="smile-right"></div>
              <div id="mask-right"></div>
            </div>
          </div>

          <div id="tongue"></div>
          <div id="tummy"></div>
        </div>
      </div>
    </>
  );
});
