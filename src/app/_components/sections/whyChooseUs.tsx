"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa6";

const WhyChooseUs = () => {
  const flags = [
    {
      id: 0,
      title: "German",
      image: "",
    },
    {
      id: 1,
      title: "French",
      image: "",
    },
    {
      id: 2,
      title: "French",
      image: "",
    },
    {
      id: 3,
      title: "French",
      image: "",
    },
    {
      id: 4,
      title: "French",
      image: "",
    },
    {
      id: 5,
      title: "French",
      image: "",
    },
    {
      id: 6,
      title: "French",
      image: "",
    },
  ];

  return (
    <section className="lg:px-20 px-3 min-h-[100vh] lg:my-[10em] my-[10em]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-[8em]">
        <h2 className="lg:text-[3.5rem] text-[2em] font-bold lg:w-[60%] mb-8 lg:mb-0">
          Why HCL 360?
        </h2>
        <p className="self-end pb-[1em] lg:text-righ lg:w-[40%]">
          Partnering with the best to deliver top quality work. Our expertise
          ranges over professional modern solutions making the language barrier
          a breeze
        </p>
      </div>
      <div className="lg:h-[100vh] flex lg:gap-3 gap-8 flex-col lg:flex-row lg:px-20">
        <div className="lg:w-[50%] rounded-lg h-full bg-foreground/5 lg:p-8 p-5">
          <div className="h-[65%]"></div>
          <div className="">
            <h2 className="lg:text-[2.5rem] text-[1.5rem] font-bold py-5">
              Quality Assurance
            </h2>
            <p className="">Multi-step review process</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:w-[50%] rouned-lg h-full">
          <div className="h-[60%] bg-foreground/5 rounded-lg lg:p-8 p-5">
            <div className="">
              <h2 className="text-[1.5rem] lg:text-[2.5rem] font-bold py-5">
                Expert Linguistics
              </h2>
              <p className="">Native speakers with industry expertise.</p>
            </div>
            <div className="h-[60%] lg:p-8 pt-5">
              <div className="flex items-end w-[100%] overflow-hidden lg:block">
                <motion.div
                  className="h-full flex  items-end gap-3"
                  animate={{ x: ["-60%", "0%"] }}
                  transition={{
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "mirror", // Loop the animation
                    duration: 50, // Duration of one complete cycle
                    ease: "linear", // Smooth movement
                  }}
                >
                  {flags.map(({ id, title, image }) => {
                    return (
                      <div
                        key={id}
                        className="rounded-md border-gradient px-5 py-3 mb-10 flex items-center justify-center"
                      >
                        <div className="h-[20px] w-[20px]">
                          {/* <Image
                  loader={cloudinaryLoader}
                  src={image}
                  alt="Country flags, liguistics"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  // unoptimized
                  /> */}
                        </div>

                        <strong className="ml-2">{title}</strong>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="flex items-end w-[100%] overflow-hidden lg:block">
                <motion.div
                  className="h-full flex  items-end gap-3"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "mirror", // Loop the animation
                    duration: 50, // Duration of one complete cycle
                    ease: "linear", // Smooth movement
                  }}
                >
                  {flags.map(({ id, title, image }) => {
                    return (
                      <div
                        key={id}
                        className="rounded-md border-gradient px-5 py-3 mb-10 flex items-center justify-center"
                      >
                        <div className="h-[20px] w-[20px]">
                          {/* <Image
                  loader={cloudinaryLoader}
                  src={image}
                  alt="Country flags, liguistics"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  // unoptimized
                  /> */}
                        </div>

                        <strong className="ml-2">{title}</strong>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col gap-3 h-[40%]">
            <div className="rounded-lg lg:w-[50%] bg-foreground/5 lg:p-8 p-5">
              <div className="h-[60%]">
                <h2 className="text-[3rem] text-[] font-extrabold">100%</h2>
              </div>

              <h3 className="text-[1.5rem]">Fast Turnaround</h3>
              <p className="">We respect your deadlines.</p>
            </div>
            <div className="rounded-lg lg:w-[50%] bg-foreground/5 lg:p-8 p-5">
              <div className="h-[60%]">
                <FaHandshake className="font-bold lg:text-[5rem] text-[5rem]" />
              </div>
              <div className="">
                <h3 className="text-[1.5rem]">Confidentiality</h3>
                <p className="">We value your data security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
