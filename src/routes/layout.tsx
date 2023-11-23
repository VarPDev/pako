import { component$, Slot, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { isWithinInterval, set } from "date-fns";
import { Cat } from "~/components/cat/cat";
import { CatWalk } from "~/components/cat/cat-walk";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { Santa } from "~/components/santa/santa";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const show = useSignal(false);

  const today = new Date();
  const start = set(today, {
    month: 11,
    date: 15,
  });
  const end = set(today, {
    year: today.getFullYear() + 1,
    month: 0,
    date: 15,
  });

  const inRange = isWithinInterval(today, {
    start,
    end,
  });

  const snows = inRange ? new Array(200).fill(0) : null;

  return (
    <>
      {show.value && snows && (
        <div class="snow-container">
          {snows.map((item, index) => (
            <div key={index} class="snow"></div>
          ))}
        </div>
      )}

      <Header show={show} />
      <main>
        {show.value && !snows && <Cat />}
        {/* If I move this after the Slot, on value change slot reload */}
        {show.value && !snows && <CatWalk />}
        {show.value && snows && <Santa />}
        <Slot />
      </main>
      <Footer />
    </>
  );
});
