import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-full ">
      <div className=""></div>
      <div className="flex flex-col items-center justify-center h-full text-center lg:p-14 px-5 py-14">
        <h1 className="lg:text-[4rem] font-bold text-[2rem] text-center">
          Beyond Words: <br /> Language <br className="md:hidden " /> Solutions
          For <br /> Global Media & AI
        </h1>
        <p className="lg:w-[60%] mt-6">
          We provide high-quality subtitling, precise data annotation for
          machine learning, and expert translation services to help you connect,
          innovate, and grow.
        </p>
      </div>
    </section>
  );
};

export default Hero;
