"use client";

import MotionWrapper from "../utilities/motionWrapper";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary"; // adjust import path

export interface LanguagesContents {
  header: string;
  subtext: string;
  languages: { name: string; flag: string }[];
}

export const languagesContents: LanguagesContents = {
  header: "Languages We Offer",
  subtext:
    "Our team of native linguists covers a wide range of languages to help your business connect globally with precision and cultural nuance.",
  languages: [
    { name: "English", flag: "/flags/english.png" },
    { name: "French", flag: "/flags/french.png" },
    { name: "Spanish", flag: "/flags/spanish.png" },
    { name: "German", flag: "/flags/german.png" },
    { name: "Italian", flag: "/flags/italian.png" },
    { name: "Portuguese", flag: "/flags/portuguese.png" },
    { name: "Russian", flag: "/flags/russian.png" },
    { name: "Chinese (Simplified)", flag: "/flags/chinese-simplified.png" },
    { name: "Chinese (Traditional)", flag: "/flags/chinese-traditional.png" },
    { name: "Japanese", flag: "/flags/japanese.png" },
    { name: "Korean", flag: "/flags/korean.png" },
    { name: "Arabic", flag: "/flags/arabic.png" },
    { name: "Turkish", flag: "/flags/turkish.png" },
    { name: "Hindi", flag: "/flags/hindi.png" },
    { name: "Bengali", flag: "/flags/bengali.png" },
    { name: "Swahili", flag: "/flags/swahili.png" },
    { name: "Dutch", flag: "/flags/dutch.png" },
    { name: "Greek", flag: "/flags/greek.png" },
    { name: "Polish", flag: "/flags/polish.png" },
    { name: "Thai", flag: "/flags/thai.png" },
    { name: "Vietnamese", flag: "/flags/vietnamese.png" },
    { name: "Hebrew", flag: "/flags/hebrew.png" },
    { name: "Urdu", flag: "/flags/urdu.png" },
    { name: "Persian (Farsi)", flag: "/flags/persian.png" },
  ],
};

export const LanguagesPage = () => {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="py-20 px-6 lg:px-16 text-center max-w-5xl mx-auto">
        <MotionWrapper direction="up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {languagesContents.header}
          </h1>
        </MotionWrapper>
        <MotionWrapper direction="up" delay={0.2}>
          <p className="text-lg md:text-2xl leading-relaxed">
            {languagesContents.subtext}
          </p>
        </MotionWrapper>
      </section>

      {/* GRID OF LANGUAGES */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {languagesContents.languages.map((lang, i) => (
            <MotionWrapper key={i} direction="up" delay={i * 0.05}>
              <div className="min-h-[15rem] flex flex-col items-center justify-center rounded-2xl shadow hover:shadow-xl transition text-xl font-semibold text-gray-800 p-6">
                {/* 
                <Image
                  loader={cloudinaryLoader}
                  src={lang.flag || ""}
                  alt={`${lang.name} flag`}
                  width={100}
                  height={100}
                  className="object-contain mb-4"
                /> 
                */}
                {lang.name}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
};
