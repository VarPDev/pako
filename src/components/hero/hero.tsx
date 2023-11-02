import { component$ } from "@builder.io/qwik";
import ImgPako from '/public/Pako-cropped.jpeg?jsx';
import * as converter from 'number-to-words';

export const Hero = component$(() => {
  const currentYear = new Date().getFullYear()
  const startYear = new Date('1/1/2015').getFullYear()
  const yearWorked = converter.toWords(currentYear - startYear)
  const yearWorkedFormatted = yearWorked.charAt(0).toUpperCase() + yearWorked.slice(1)

  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <ImgPako class="max-w-sm rounded-lg shadow-2xl" />
          {/* <img src="/Pako.jpg" class="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 class="text-5xl font-bold">Pasquale De Lucia</h1>
            <p class="pt-6">Javascript lover</p>
            <p>I'm currently working at ScuolaZoo as a Full-stack engineer</p>
            <p class="pt-6">{yearWorkedFormatted} years experience in web development</p>
            {/* <button class="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </>
  );
});
