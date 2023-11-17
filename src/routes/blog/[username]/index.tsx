import { StaticGenerateHandler } from "@builder.io/qwik-city";

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  return {
    params: [{ username: "nyruchi" }],
  };
};
