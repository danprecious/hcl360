"use client";
import React from "react";
import { motion } from "framer-motion";

const ctaTexts = [
  { lang: "en", text: "Let's Begin" }, // English
  { lang: "fr", text: "Commençons" }, // French
  { lang: "es", text: "Empecemos" }, // Spanish
  { lang: "de", text: "Lass uns anfangen" }, // German
  { lang: "it", text: "Iniziamo" }, // Italian
  { lang: "pt", text: "Vamos começar" }, // Portuguese
  { lang: "ru", text: "Давайте начнем" }, // Russian
  { lang: "zh", text: "开始吧" }, // Chinese (Simplified)
  { lang: "ja", text: "始めましょう" }, // Japanese
  { lang: "ar", text: "لنبدأ" }, // Arabic
  { lang: "hi", text: "चलिए शुरू करें" }, // Hindi
  { lang: "ko", text: "시작합시다" }, // Korean
  { lang: "tr", text: "Hadi başlayalım" }, // Turkish
  { lang: "nl", text: "Laten we beginnen" }, // Dutch
  { lang: "sv", text: "Låt oss börja" }, // Swedish
];

const CtaSection = () => {
  return (
    <section className="my-[10em]">
      <div className="text-center py-10">
        <h1 className="lg:text-[4rem] font-bold">What are you waiting for?</h1>
        <p className="">Lorem ipsum text content, dummy replace later... </p>
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
          {ctaTexts.map(({ text }, index) => {
            return (
              <div
                key={index}
                className="rounded-[1.5rem] border-gradient px-8 py-6"
              >
                <strong className="">{text}</strong>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
