import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default component$(() => {
  const percentageOfSuccess = useSignal(100);

  const level = useSignal(0);
  const tryPassLevel = $(() => {
    const random = getRandomInt(100);

    if (random <= percentageOfSuccess.value) {
      level.value++;
      percentageOfSuccess.value--;
    } else {
      level.value = 0;
      percentageOfSuccess.value = 100;
    }
  });

  return (
    <>
      <section class="text-center">
        <h1>Buttom game</h1>
        <h3>This game require no skills but only LUCK</h3>
      </section>

      <section class="link-section">
        <div class="grid grid-cols-1 gap-12 justify-items-center">
          <p>Percentege of success {percentageOfSuccess.value}%</p>

          <div
            onClick$={tryPassLevel}
            class="button w-48 h-48 md:w-72 md:h-72 bg-red-500 rounded-full cursor-pointer select-none
    active:translate-y-4  active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]
    border-[5px] border-red-400
  "
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              Press this button
            </span>
          </div>

          <p>You pass at {level.value} level</p>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pasquale De Lucia - Full-stack engineer",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
