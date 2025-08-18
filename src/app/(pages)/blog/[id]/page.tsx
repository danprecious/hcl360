import MotionWrapper from "@/app/_components/utilities/motionWrapper";
import { blogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({
  params,
}: Awaited<{ params: { id: string } }>) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return <div className="py-20 text-center">Post not found</div>;
  }

  return (
    <div className="w-full py-16 px-6 lg:px-16 max-w-3xl mx-auto">
      {/* Title */}
      <MotionWrapper direction="up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          {post.title}
        </h1>
      </MotionWrapper>

      {/* Description */}
      <MotionWrapper direction="up" delay={0.1}>
        <p className="text-gray-600 mb-8 text-lg">{post.description}</p>
      </MotionWrapper>

      {/* Hero Image */}
      <MotionWrapper direction="up" delay={0.2}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl mb-12"
        />
      </MotionWrapper>

      {/* Content Blocks */}
      <div className="prose prose-lg max-w-none">
        {post.content.map((block, i) => {
          if (block.type === "paragraph")
            return (
              <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                <p className="mb-6 leading-relaxed">{block.text}</p>
              </MotionWrapper>
            );

          if (block.type === "heading")
            return (
              <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
                  {block.text}
                </h2>
              </MotionWrapper>
            );

          if (block.type === "list")
            return (
              <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                <ul className="list-disc list-inside mb-8 space-y-2">
                  {block.items?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </MotionWrapper>
            );

          if (block.type === "quote")
            return (
              <MotionWrapper key={i} direction="up" delay={i * 0.1}>
                <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-8 text-lg">
                  {block.text}
                </blockquote>
              </MotionWrapper>
            );

          return null;
        })}
      </div>
    </div>
  );
}
