import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const works = [
    {
      id: 1,
      startDate: "Jan 2022",
      endDate: "Current",
      title: "ScuolaZoo",
      slug: "The voice of the new generations",
      description:
        "ScuolaZoo is one of the companies of OneDay Group, a business and community builder, whose goal is to test, implement and spread a new and engaging way of experiencing work and doing business! What makes us different from the others is our approach: we mix digital and on field activities, we go from memes to community creation, always having at the center our vision, that is to put the new generations at the center!",
      role: "Full-stack engineer",
    },
    {
      id: 2,
      startDate: "Mar 2019",
      endDate: "Gen 2022",
      title: "Semantyca",
      description:
        "We create web systems that can import any number of documents and all types into a database, we correlate them with each other, we recognize the entities based on what your data contains, we organize them into taxonomies. Finally we allow searching for them, full text or for concepts through neural networks",
      slug: "A software house with twenty years of experience in building databases",
      role: "Lead fron-end",
    },
    {
      id: 3,
      startDate: "Jul 2018",
      endDate: "Mar 2019",
      title: "Botsociety",
      description:
        "Botsociety allows you to design conversations for any platform, including WhatsApp, Messenger, the Google Assistant, Alexa, Slack, and more. Each platform is customized for that tool specifically, so you can be sure that all of your designs will flow as intended.",
      slug: "",
      role: "Full-stack JavaScript developer",
    },
    {
      id: 4,
      startDate: "Jun 2017",
      endDate: "Jul 2018",
      title: "MainStreaming",
      description:
        "MainStreaming is a video delivery network created to distribute video streaming in an intelligent and sustainable way available to industries who need an evolved service of both video hosting and live streaming on a global level. The first Video Delivery Network (VDN) designed to deliver the highest quality & performance in live video and on demand globally",
      slug: "",
      role: "Full-stack developer",
    },
    {
      id: 5,
      startDate: "Feb 2016",
      endDate: "Jun 2017",
      title: "Zinformatica",
      description:
        "Zinformatica provide IT services that exceed customer expectations, maintaining a high standard of excellence through quality work and total commitment.",
      slug: "",
      role: "Full-stack developer",
    },
  ];

  return (
    <>
      <section class="text-center">
        <h1>History</h1>
        <h3>All my jobs</h3>
      </section>

      <section class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div
              class="border-2-2 border-secondary absolute h-full border"
              style="right: 50%; border-radius: 1%;"
            ></div>
            <div
              class="border-2-2 border-secondary absolute h-full border"
              style="left: 50%; border-radius: 1%;"
            ></div>
            {works.map((w, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    key={w.id}
                    class="mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-secondary">{w.startDate}</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        {w.title}
                      </h4>
                      <p class="mb-3 font-bold text-md md:text-xl">{w.slug}</p>
                      <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        {w.description}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={w.id}
                    class="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1  w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-secondary">{w.startDate}</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        {w.title}
                      </h4>
                      <p class="mb-3 font-bold text-md md:text-xl">{w.slug}</p>
                      <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        {w.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
});