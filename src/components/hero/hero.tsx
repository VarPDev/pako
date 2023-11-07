import { component$ } from "@builder.io/qwik";
import ImgPako from "/src/media/Pako-cropped.jpeg?jsx";
import converter from "number-to-words";
import { Link } from "@builder.io/qwik-city";

export const Hero = component$(() => {
  const currentYear = new Date().getFullYear();
  const startYear = new Date("1/1/2015").getFullYear();
  const yearWorked = converter.toWords(currentYear - startYear);
  const yearWorkedFormatted =
    yearWorked.charAt(0).toUpperCase() + yearWorked.slice(1);

  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <ImgPako
            alt="Pasquale De Lucia picture"
            class="max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl"
          />
          <div class="prose">
            <h1 class="text-5xl font-bold">Pasquale De Lucia</h1>
            <p>Web Wizard and JavaScript Lover</p>
            <p>
              I craft digital wonders as a Full-Stack Engineer at ScuolaZoo.
            </p>
            <p>
              With a solid {yearWorked} years of web development under my belt,
              I'm here to make your online dreams a reality.
            </p>
            <p>
              <Link href="/Pasquale_De_Lucia-Resume.pdf" target="_blank">
                <button class="btn btn-primary">Get resume</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
});
