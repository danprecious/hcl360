import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";
import ClientList from "./clientList";

const Hero = () => {
  return (
    <section className="h-full ">
      <div className=""></div>
      <div className="flex flex-col items-center justify-center h-full text-center lg:p-14 px-5 py-14">
        <h1 className="lg:text-[4rem] font-black text-[2rem] text-center">
          Beyond Words: <br /> Language <br className="md:hidden " /> Solutions
          For <br /> <span className="hero-span"> Global Media & AI </span>
        </h1>
        <p className="lg:w-[60%] mt-6">
          We provide high-quality subtitling, precise data annotation for
          machine learning, and expert translation services to help you connect,
          innovate, and grow.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            href=""
            className="border px-8 py-4 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Learn more
          </Link>
          <Link href="/request-a-quote" className="button1 px-8 py-4">
            Request a Quote
          </Link>
        </div>
      </div>

      <ClientList />
    </section>
  );
};

export default Hero;
