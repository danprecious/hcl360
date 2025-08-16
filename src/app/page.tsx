import BlogTeaser from "./_components/sections/blogTeaser";
import CtaSection from "./_components/sections/ctaSection";
import Faq from "./_components/sections/faq";
import Hero from "./_components/sections/hero";
import MainOffers from "./_components/sections/mainOffers";
import Partners from "./_components/sections/partners";
import WhyChooseUs from "./_components/sections/whyChooseUs";

const Home = () => {
  return (
    <main className="">
      <Hero />

      <MainOffers />

      <Partners />

      <WhyChooseUs />

      <Faq />

      <BlogTeaser />

      <CtaSection />
    </main>
  );
};

export default Home;
