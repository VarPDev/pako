import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

function probabilityOfSuccess(levelNumber: number) {
  let probability = 1
  for (let i = 0; i < levelNumber; i++) {
    probability *= (100 - i) / 100
  }
  return probability
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default component$(() => {
  const startSuccess = 100
  const totalLevel = 100
  const percentageOfSuccess = useSignal(startSuccess)
  const percentageOfSuccessGlobal = probabilityOfSuccess(startSuccess)
  const percentageOfSuccessFromNow = useSignal(
    probabilityOfSuccess(percentageOfSuccess.value),
  )
  // useTask$(() => {
  //   percentageOfSuccessFromNow.value = probabilityOfSuccess(
  //     percentageOfSuccess.value
  //   );
  // });

  const level = useSignal(0)
  const maxLevel = useSignal(0)
  const tryPassLevel = $(() => {
    const random = getRandomInt(totalLevel)

    if (level.value === totalLevel) {
      level.value = 0
      percentageOfSuccess.value = startSuccess
    } else {
      if (random <= percentageOfSuccess.value) {
        level.value++
        percentageOfSuccess.value--
        if (level.value > maxLevel.value) {
          maxLevel.value = level.value
        }
      } else {
        level.value = 0
        percentageOfSuccess.value = startSuccess
      }
      percentageOfSuccessFromNow.value = probabilityOfSuccess(
        percentageOfSuccess.value,
      )
    }
  })

  return (
    <>
      <section class="title-section text-center">
        <h1 class="mb-4">Buttom game</h1>
        <h3 class="mb-4">
          This game requires no skills but only LUCK. If you think you're lucky,
          try to win!
        </h3>
        <p class="text-lg mb-4">
          There are 100 levels in this challenge. As you successfully conquer
          each level, the probability of passing the next one decreases by 1%.
          <span
            class="tooltip ml-2 top-[2px]"
            data-tip="Commencing with a full 100% chance of success for the initial level, each subsequent accomplishment introduces an added layer of difficulty. Navigate through the escalating challenges and witness the diminishing odds, putting your luck to the test with each passing level."
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-secondary"
                fill-rule="evenodd"
                d="M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z"
              />
            </svg>
          </span>
        </p>
        <p></p>
      </section>

      <section class="link-section">
        <div class="grid grid-cols-1 gap-6 justify-items-center">
          {/* <p>
            Percentege of success in this level: {percentageOfSuccess.value}%
          </p>
          <p>Percentege of win from now: {percentageOfSuccessFromNow.value}%</p>
          <p>Percentege of win {percentageOfSuccessGlobal}%</p> */}

          <div
            onClick$={tryPassLevel}
            class={`text-center button w-36 h-36 md:w-48 md:h-48 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${
      level.value === startSuccess
        ? 'border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]'
        : 'border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]'
    }`}
          >
            <span class="flex flex-col justify-center items-center h-full text-white font-bold text-[5rem] opacity-50">
              {/* Press this button */}
              {level.value}
            </span>
          </div>

          <p class="text-xl mt-6">MAX {maxLevel.value}</p>
          <p>{level.value === startSuccess ? 'HAI VINTO' : ''}</p>
        </div>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pasquale De Lucia - Full-stack engineer',
  meta: [
    {
      name: 'description',
      content:
        'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
    },
  ],
}
