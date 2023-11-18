import { component$, Slot, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Cat } from "~/components/cat/cat";
import { CatWalk } from "~/components/cat/cat-walk";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  // cacheControl({
  //   // Always serve a cached response by default, up to a week stale
  //   staleWhileRevalidate: 60 * 60 * 24 * 7,
  //   // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
  //   maxAge: 5,
  // });
};

export default component$(() => {
  const show = useSignal(false);

  return (
    <>
      <Header show={show} />
      <main>
        {show.value && <Cat />}
        {/* If I move this after the Slot, on value change slot reload */}
        {show.value && <CatWalk />}
        <Slot />
      </main>
      <Footer />
    </>
  );
});
