import React from "react";

export const blogPosts = [
  {
    id: 0,
    title: "What is 'Training Data' and Why Does Quality Matter?",
    description:
      "A deep dive into the role of training data in AI and how data quality impacts the accuracy, reliability, and performance of machine learning models.",
    image: "/images/training-data-quality.jpg",
    excerpt:
      "Training data is the backbone of AI systems. Learn why quality, not just quantity, determines how well your model performs in real-world scenarios.",
    date: "2025-08-10",
    author: "HCL360 Editorial Team",
    blogContent: `
      Training data refers to the dataset used to teach a machine learning model how to perform a task. 
      It can include text, audio, images, or video — depending on the AI's intended application.

      High-quality training data is essential because it directly affects the model's accuracy and bias levels. 
      Poorly labeled or inconsistent data can lead to faulty predictions and unreliable outcomes.

      At HCL360, we provide meticulously annotated datasets for NLP, computer vision, and speech recognition systems. 
      We combine human expertise with AI-assisted tools to ensure precision, context-awareness, and cultural sensitivity in every dataset.

      In short: better data in means better AI out.
    `,
  },
  {
    id: 1,
    title: "5 Common Mistakes in Video Subtitling (And How to Avoid Them)",
    description:
      "Discover the top errors made in video subtitling and how professional localization ensures your message is understood worldwide.",
    image: "/images/video-subtitling-mistakes.jpg",
    excerpt:
      "From poor timing to cultural missteps, subtitling mistakes can ruin a viewer's experience. Here's how to get it right every time.",
    date: "2025-08-12",
    author: "HCL360 Media Team",
    blogContent: `
      Subtitling is more than translating spoken words. It's about timing, formatting, and cultural adaptation.
      
      Common mistakes include:
      1. Poor timing — captions appear too early or late.
      2. Excessive line length — hard for viewers to read in time.
      3. Literal translations — ignoring cultural context.
      4. Inconsistent style — varied punctuation, font, or terminology.
      5. Missing accessibility features — like SDH for the hearing impaired.

      Professional subtitling ensures accurate meaning, maintains audience engagement, and complies with platform requirements.
      At HCL360, we adhere to global subtitling standards while adapting content for each target market.
    `,
  },
  {
    id: 2,
    title: "Human-in-the-Loop: Why Expert Linguists are Crucial for AI",
    description:
      "Explore how human expertise complements AI automation to deliver high-quality translations, annotations, and data solutions.",
    image: "/images/human-in-the-loop.jpg",
    excerpt:
      "AI can process vast amounts of data, but without human oversight, errors and cultural nuances can be overlooked.",
    date: "2025-08-14",
    author: "HCL360 AI Solutions",
    blogContent: `
      Human-in-the-loop (HITL) is a model where human experts collaborate with AI systems to enhance accuracy.
      While AI can speed up tasks like translation or data annotation, it lacks the cultural awareness and nuanced understanding humans bring.

      Expert linguists validate AI outputs, correct errors, and ensure context is preserved.
      This synergy reduces bias, improves quality, and ensures compliance with industry standards.

      At HCL360, HITL is part of our core process for both AI data services and localization projects.
    `,
  },
  {
    id: 3,
    title: "The Difference Between Localization and Translation in Media",
    description:
      "Understand the critical differences between translation and localization, and why both matter in global media projects.",
    image: "/images/localization-vs-translation.jpg",
    excerpt:
      "Translation converts words; localization adapts experiences. Here's why the distinction is key to reaching global audiences.",
    date: "2025-08-15",
    author: "HCL360 Localization Team",
    blogContent: `
      Translation focuses on converting text from one language to another while preserving meaning.
      Localization goes beyond that — adapting tone, visuals, cultural references, and even user interface elements for a specific audience.

      For media, localization ensures subtitles, captions, and on-screen text feel natural to the target viewer.
      This can include changing idioms, rephrasing jokes, and adapting measurements or currencies.

      At HCL360, we combine translation precision with cultural adaptation to ensure your media resonates worldwide.
    `,
  },
];

const BlogTeaser = () => {
  // Get only the first 3 posts
  const teaserPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold ">From Our Blog</h2>
          <p className="mt-2 ">
            Insights and expertise on AI, localization, and translation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {teaserPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold  mb-2">
                  {post.title}
                </h3>
                <p className=" text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm ">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
