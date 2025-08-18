import PageLayout from "@/app/_components/sections/pageLayout";
import React from "react";

export const industriesContents = {
  hero: {
    headline: "Specialized Language Solutions by Industry",
    subheadline:
      "We tailor our services to meet the unique demands of your sector.",
    cta: "Request a Quote",
  },
  intro:
    "Every industry has its own language. Our native linguists combine language expertise with domain knowledge to ensure your content is accurate, compliant, and culturally relevant.",
  industries: [
    {
      title: "Technology & AI",
      description:
        "Annotation and translation services tailored for emerging technologies, AI, and machine learning.",
    },
    {
      title: "Legal",
      description:
        "Precise, certified translations for contracts, compliance documents, and litigation support.",
    },
    {
      title: "Medical & Pharmaceutical",
      description:
        "Accurate translations for clinical trials, research papers, medical devices, and patient materials.",
    },
    {
      title: "Technical & Manufacturing",
      description:
        "Specialized translation of technical manuals, patents, and product specifications.",
    },
    {
      title: "Finance & Banking",
      description:
        "Professional translation for reports, disclosures, compliance documents, and audits.",
    },
    {
      title: "Marketing & Advertising",
      description:
        "Creative localization for campaigns, product launches, and branding materials.",
    },
    {
      title: "E-learning & Education",
      description:
        "Translation and localization of courses, training programs, and digital learning platforms.",
    },
  ],
  ctaBanner: {
    headline: "Your Industry. Our Expertise.",
    buttons: ["Request a Quote", "Contact Us"],
  },
};

const IndutriesPage = () => {
  return (
    <section className="">
      <PageLayout contents={industriesContents} />
    </section>
  );
};

export default IndutriesPage;
