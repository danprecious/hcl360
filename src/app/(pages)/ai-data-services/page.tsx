import { PageLayout } from "@/app/_components/sections/pageLayout";
import { Toast } from "@/app/_components/sections/toasters";
import React from "react";

const aiDataServicesContents = {
  hero: {
    headline: "Fueling a Smarter Future with Precision Language Data",
    subheadline:
      "We deliver high-quality, human-verified data annotation and collection to power AI and machine learning models worldwide.",
    cta: "Request a Quote",
  },
  intro:
    "AI systems are only as good as the data that trains them. At HCL360, we provide precise, scalable, and culturally aware annotation across text, image, audio, and video datasets — ensuring your models perform with accuracy and reliability.",
  services: [
    {
      title: "Data Annotation",
      description:
        "Text, image/video, and audio annotation — including NER, sentiment analysis, bounding boxes, semantic segmentation, and transcription.",
    },
    {
      title: "AI Training Data Collection",
      description:
        "Diverse, multilingual, and domain-specific data collection tailored for training robust machine learning models.",
    },
    {
      title: "Linguistic Corpus Development",
      description:
        "Custom corpus creation for NLP, search engines, and conversational AI applications.",
    },
    {
      title: "Sentiment Analysis",
      description:
        "Accurately labeled datasets for emotion detection, brand monitoring, and customer insights.",
    },
  ],
  whoFor: [
    "Machine Learning Engineers",
    "AI Researchers",
    "Tech Startups",
    "Enterprises building multilingual AI applications",
  ],
  caseStudy: {
    title: "Case Study: Smarter Self-Driving Cars",
    content:
      "We annotated over 100,000 images for an autonomous driving project, improving object recognition accuracy by 15%.",
  },
  whyChoose: [
    "Native linguists + domain experts",
    "Human-in-the-loop accuracy",
    "Scalable workforce for large projects",
    "Secure data handling",
  ],
  ctaBanner: {
    headline: "Ready to Train Smarter AI?",
    buttons: ["Request a Quote", "Contact Us"],
  },
};

const AiDataServicesPage = () => {
  return (
    <section className="flex items-center flex-col relative">
      <PageLayout contents={aiDataServicesContents} />
    </section>
  );
};

export default AiDataServicesPage;
