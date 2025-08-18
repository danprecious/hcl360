import { PageLayout } from "@/app/_components/sections/pageLayout";
import React from "react";

const businessTranslationContents = {
  hero: {
    headline: "Accurate and Reliable Business Translation",
    subheadline:
      "From contracts to websites, we provide professional translation services for global enterprises.",
    cta: "Request a Quote",
  },
  intro:
    "In today’s global marketplace, accuracy and clarity in business communication are non-negotiable. Our expert linguists deliver precise translations that align with your industry and business goals.",
  services: [
    {
      title: "Document Translation",
      description:
        "Translation of contracts, reports, legal documents, and technical manuals with full accuracy.",
    },
    {
      title: "Website Localization",
      description:
        "Adapt your website for international audiences with multilingual SEO, UX adjustments, and cultural adaptation.",
    },
    {
      title: "Certified Translation",
      description:
        "Official translations for legal, immigration, and academic purposes — compliant with regulatory standards.",
    },
  ],
  industriesCovered: [
    "Legal",
    "Finance & Banking",
    "Technical & Manufacturing",
    "Marketing & Advertising",
    "Medical & Pharmaceutical",
  ],
  whyChoose: [
    "Native linguists with industry expertise",
    "Confidentiality and secure document handling",
    "Multi-step quality assurance",
    "Fast turnaround for urgent projects",
  ],
  ctaBanner: {
    headline: "Ready to Take Your Business Global?",
    buttons: ["Request a Quote", "Contact Us"],
  },
};

const BusinessTranslationPage = () => {
  return (
    <section className="">
      <PageLayout contents={businessTranslationContents} />
    </section>
  );
};

export default BusinessTranslationPage;
