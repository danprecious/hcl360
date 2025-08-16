import React from "react";

const offers = [
  {
    id: 0,
    title: "AI & Data Services",
    description:
      "High-quality, structured data to train your AI and machine learning models",
    subTitle: "",
    subDescription: "",
    image1: "",
    image2: "",
    orientation: "lg:flex-row",
  },
  {
    id: 1,
    title: "Media Localization",
    description:
      "Engaging subtitles and localization that make your content accessible to a global audience",
    subTitle: "",
    subDescription: "",
    image1: "",
    image2: "",
    orientation: "lg:flex-row-reverse",
  },
  {
    id: 2,
    title: "Business Translation",
    description:
      "Accurate and reliable translation for all your corporate needs.",
    subTitle: "",
    subDescription: "",
    image1: "",
    image2: "",
    orientation: "lg:flex-row",
  },
];

const MainOffers = () => {
  return (
    <section className="lg:px-20 px-5 py-[10em]">
      <div className="hidden flex-row-reverse "></div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end lg:mb-[8em]">
        <h2 className="lg:text-[3.5rem] text-[2em] font-bold lg:w-[70%] mb-8 lg:mb-0">
          Bridging the language gap with expert services
        </h2>
        <p className="self-end pb-[1em] lg:text-right lg:w-[25%]">
          Our expertise ranges over professional modern solutions making the
          language barrier a breeze
        </p>
      </div>
      <div className="">
        {offers.map((offer) => {
          return (
            <div
              key={offer.id}
              className={`flex flex-col gap-4 my-10 lg:h-[60vh] ${offer.orientation}`}
            >
              <div
                className={`flex flex-col justify-end lg:h-full h-[70vh] text-white rounded-[1em] lg:rounded-[1.7em] w-full lg:w-[70%] bg-gradient-to-br from-amber-500 from-0% via-pink-500 via-70% to-purple-600 to-90% lg:p-10 p-5`}
              >
                <h3 className="text-[2rem] font-extrabold">{offer.title}</h3>
                <p className="mt-4">{offer.description}</p>
              </div>
              <div className="flex lg:rounded-[1.7em] rounded-[1em] lg:h-full min-h-[30vh] lg:w-[30%] w-full bg-foreground/5 border-[1px] border-solid border-foreground/5">
                {/* Placeholder for images */}
                {/* <img src={offer.image1} alt={offer.title} className="w-full h-auto" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainOffers;
