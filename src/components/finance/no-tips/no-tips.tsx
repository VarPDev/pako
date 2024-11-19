import { component$ } from '@builder.io/qwik'

export const NoTips = component$(() => {
  return (
    <>
      <div role="alert" class="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info h-6 w-6 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Questo blog non offre consigli finanziari, ma condivide esclusivamente
          la mia esperienza personale, con l'intento di fornire spunti e
          riflessioni basate sul mio percorso.
        </span>
      </div>
    </>
  )
})
