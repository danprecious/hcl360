"use client";
import { motion } from "framer-motion";

const listOfPartners = [
  "monalisa",
  "palabres",
  "groker",
  "monalisa",
  "palabres",
  "groker",
  "monalisa",
  "palabres",
  "groker",
  ,
  "monalisa",
  "palabres",
  "groker",
  "monalisa",
  "palabres",
  "groker",
  "monalisa",
  "palabres",
  "groker",
];

const PartnerList = () => {
  return (
    <div className="">
      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block">
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
          {listOfPartners.map((partner, index) => {
            return (
              <div
                key={index}
                className="rounded-md border-gradient px-5 py-3 mb-10"
              >
                <strong className="">{partner}</strong>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex lg:px-14 items-end w-[100%] overflow-hidden lg:block">
        <motion.div
          className="h-full flex  items-end gap-3 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {listOfPartners.map((partner, index) => {
            return (
              <div key={index} className="rounded-md border-gradient px-5 py-3">
                <strong className="">{partner}</strong>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerList;
