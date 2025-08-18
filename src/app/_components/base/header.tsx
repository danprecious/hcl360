"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useRef, useState } from "react";
import { NavLinks } from "@/app/types/types";
import { usePathname } from "next/navigation";

const navLinks: NavLinks[] = [
  {
    id: 0,
    title: "AI & Data Services",
    href: "/ai-data-services",
    subMenu: [
      {
        id: 0,
        title: "Data Annotation",
        href: "/ai-data-services/#data-annotation",
      },
      {
        id: 1,
        title: "AI Training Data Collection",
        href: "/ai-data-services/#ai-training-data-collection",
      },
      {
        id: 2,
        title: "Linguistic Corpus Development",
        href: "/ai-data-services/#linguistic-corpus-development",
      },
      {
        id: 3,
        title: "Sentiment Analysis",
        href: "/ai-data-services/#sentiment-analysis",
      },
    ],
  },
  {
    id: 1,
    title: "Media Localization",
    href: "/media-localization",
    subMenu: [
      {
        id: 0,
        title: "Subtitling & Captioning",
        href: "/media-localization/#subtitling-captioning",
      },
      {
        id: 1,
        title: "Voice-over & Dubbing",
        href: "/media-localization/#voice-over-dubbing",
      },
      {
        id: 2,
        title: "Video & On-Screen Text Localization",
        href: "/media-localization/#video-on-screen-text-localization",
      },
    ],
  },
  {
    id: 2,
    title: "Business Translation Services",
    href: "/business-translation",
    subMenu: [
      {
        id: 0,
        title: "Document Translation",
        href: "/business-translation/#document-translation",
      },
      {
        id: 1,
        title: "Website Localization",
        href: "/business-translation/#website-localization",
      },
      {
        id: 2,
        title: "Certified Translation",
        href: "/business-translation/#certified-translation",
      },
    ],
  },
  {
    id: 3,
    title: "Industries",
    href: "/industries",
    subMenu: [
      {
        id: 0,
        title: "Legal",
        href: "/industries/#legal",
      },
      {
        id: 1,
        title: "Medical & Pharmaceutical",
        href: "/industries/#medical-pharmaceutical",
      },
      {
        id: 2,
        title: "Technical & Manufacturing",
        href: "/industries/#technical-manufacturing",
      },
      {
        id: 3,
        title: "Finance & Banking",
        href: "/industries/#finance-banking",
      },
      {
        id: 4,
        title: "Marketing & Adverstising",
        href: "/industries/#marketing-advertising",
      },
      {
        id: 5,
        title: " E-learning & Education",
        href: "/industries/#e-learning-education",
      },
    ],
  },
  {
    id: 4,
    title: "About Us",
    href: "/about",
    subMenu: null,
  },
  {
    id: 5,
    title: "Languages",
    href: "/languages",
    subMenu: null,
  },
  {
    id: 6,
    title: "Blog",
    href: "/blog",
    subMenu: null,
  },
  {
    id: 7,
    title: "Contact Us",
    href: "/contact",
    subMenu: null,
  },
];
const Header = () => {
  const pathName = usePathname();
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <header className="flex justify-center items-center lg:py-7 py-5 lg:px-6 shadow-xs shadow-foreground/5 px-3 sticky top-0 backdrop-blur-sm bg-transparent z-60">
      <nav className="lg:flex justify-between items-center hidden w-full text-sm font-light">
        <div className="w-[85%] flex flex-col items-start">
          <Logo />
          <div className="flex justify-between gap-8 mt-5">
            {navLinks.map(({ id, title, href, subMenu }) => (
              <div
                key={id}
                className="relative"
                onMouseEnter={() => setHoverId(id)}
                // onMouseLeave={() => setHoverId(null)}
              >
                <Link
                  href={href}
                  className={`w-fit {pathName === href ? "text-blue-500 font-bold" : ""}`}
                >
                  {title}
                </Link>

                {/* Submenu */}
                {subMenu && hoverId === id && (
                  <div
                    onMouseLeave={() => setHoverId(null)}
                    className="absolute left-0 mt-2 bg-background border shadow-lg rounded-md p-5 z-50 w-[20em]"
                  >
                    <ul>
                      {subMenu.map((item) => (
                        <li key={item.id} className="py-5">
                          <Link
                            href={item.href}
                            className="hover:text-stone-500"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Link href="/request-a-quote" className="button1">
            Request a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden w-full">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <div className="relative flex items-center justify-center py-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          {/* Optional: placeholder to balance layout */}
        </div>

        <Logo />

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl"
        >
          ☰
        </button>
      </div>
      {navOpen && (
        <nav className="mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 hover:bg-gray-200"
                  onClick={() => setNavOpen(false)} // 👈 Close nav
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
