import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

function probabilityOfSuccess(levelNumber: number) {
  let probability = 1;
  for (let i = 0; i < levelNumber; i++) {
    probability *= (100 - i) / 100;
  }
  return probability;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default component$(() => {
  const startSuccess = 100;
  const totalLevel = 100;
  const percentageOfSuccess = useSignal(startSuccess);
  const percentageOfSuccessGlobal = probabilityOfSuccess(startSuccess);
  const percentageOfSuccessFromNow = useSignal(
    probabilityOfSuccess(percentageOfSuccess.value)
  );
  // useTask$(() => {
  //   percentageOfSuccessFromNow.value = probabilityOfSuccess(
  //     percentageOfSuccess.value
  //   );
  // });

  const level = useSignal(0);
  const tryPassLevel = $(() => {
    const random = getRandomInt(totalLevel);

    if (level.value === totalLevel) {
      level.value = 0;
      percentageOfSuccess.value = startSuccess;
    } else {
      if (random <= percentageOfSuccess.value) {
        level.value++;
        percentageOfSuccess.value--;
      } else {
        level.value = 0;
        percentageOfSuccess.value = startSuccess;
      }
      percentageOfSuccessFromNow.value = probabilityOfSuccess(
        percentageOfSuccess.value
      );
    }
  });

  return (
    <>
      <section class="title-section text-center">
        <h1 class="mb-2">Buttom game</h1>
        <h3>
          This game requires no skills but only LUCK. If you win at this game,
          think to try the lottery!
        </h3>
      </section>

      <section class="link-section">
        <div class="grid grid-cols-1 gap-6 justify-items-center">
          <p>
            Percentege of success in this level: {percentageOfSuccess.value}%
          </p>
          <p>Percentege of win from now: {percentageOfSuccessFromNow.value}%</p>
          <p>Percentege of win {percentageOfSuccessGlobal}%</p>

          <div
            onClick$={tryPassLevel}
            class={`button w-48 h-48 md:w-72 md:h-72 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${
      level.value === startSuccess
        ? "border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]"
        : "border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]"
    }`}
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              Press this button
            </span>
          </div>

          <p>You are at level {level.value}</p>
          <p>{level.value === startSuccess ? "HAI VINTO" : ""}</p>
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
