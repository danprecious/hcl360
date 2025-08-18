import { PageLayout } from "@/app/_components/sections/pageLayout";
import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";

const mediaLocalizationContents = {
  hero: {
    headline: "Bring Your Content to Global Audiences",
    subheadline:
      "From subtitles to dubbing, we help media content resonate across languages and cultures.",
    cta: "Request a Quote",
  },
  intro:
    "Media localization is more than translation — it’s adapting your content for cultural nuance, timing, and accessibility. We ensure your media speaks naturally to audiences worldwide.",
  services: [
    {
      title: "Subtitling & Captioning",
      description:
        "Accurate subtitles crafted with cultural nuance, character limits, and reading speed in mind. Formats supported include .SRT, .VTT, .ASS, and more.",
    },
    {
      title: "Voice-over & Dubbing",
      description:
        "Professional voice talent and technical expertise to deliver authentic dubbing and localized audio.",
    },
    {
      title: "Video & On-Screen Text Localization",
      description:
        "Adaptation of graphics, captions, and embedded text to match target markets while preserving brand identity.",
    },
  ],
  portfolio:
    "Our portfolio includes work for streaming platforms, e-learning videos, and corporate training content.",
  whyChoose: [
    "Adherence to international subtitling standards",
    "Access to diverse voice-over talent",
    "Specialized services for accessibility (SDH, forced narratives)",
    "Proven experience with global media platforms",
  ],
  ctaBanner: {
    headline: "Ready to Globalize Your Media?",
    buttons: ["Request a Quote", "Contact Us"],
  },
};

const MediaLocalizationPage = () => {
  return (
    <section className="">
      <PageLayout contents={mediaLocalizationContents} />
    </section>
  );
};

export default MediaLocalizationPage;
