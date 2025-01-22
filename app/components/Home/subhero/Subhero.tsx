"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxImage from "@/lib/ParallaxImage";

/**
 * This component renders the "More About Us" page.
 */
const MoreAboutUs = () => {
  const moreAboutTitle = "What you'll learn";

  const sections = [
    {
      id: 1,
      title: "learn to fade",
      info: "Learn about our journey and how we've grown over the years.",
      src: "/images/about/other/moreAboutUs_finalizedweb.jpg",
      alt: "Company history",
    },
    {
      id: 2,
      title: "learn to use RAZOR",
      info: "Discover our dedication to quality and innovation.",
      src: "/images/about/other/moreAboutUs_finalizedweb_2.jpg",
      alt: "Our commitment",
    },
    {
      id: 3,
      title: "learn to fade beard",
      info: "See how we embrace technology to stay ahead.",
      src: "/images/about/other/moreAboutUs_finalizedweb_3.jpg",
      alt: "Innovation",
    },
    {
        id: 4,
        title: "learn to do brows",
        info: "See how we embrace technology to stay ahead.",
        src: "/images/about/other/moreAboutUs_finalizedweb_3.jpg",
        alt: "Innovation",
      },
  ];

  const [visibleSectionId, setVisibleSectionId] = useState<number | null>(null);
  const sectionRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLDivElement;
      if (entry.isIntersecting) {
        setVisibleSectionId(Number(target.dataset.id));
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.4,
      rootMargin: "0px",
    });

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [observerCallback]);

  const visibleSection = sections.find((section) => section.id === visibleSectionId);

  return (
    <>
      <div className=" mt-52 md:mx-4 px-5 md:px-0 rounded-md"> {/* bg-[#4B514D] */}
        <div className="max-w-7xl mx-auto">
          <div className="mx-5 sm:mx-10">
            <div className="hidden md:flex w-full items-start py-28">
              <div className="sticky top-0 w-full h-screen flex items-center text-[#D2D5D5]">
                <div className="flex flex-col w-full h-full py-20">
                  <div className="flex-grow">
                    <h2 className="text-4xl lg:text-6xl font-medium lg:leading-[80px]">
                      {moreAboutTitle}
                    </h2>
                  </div>
                  {visibleSection && (
                    <motion.div
                      key={visibleSection.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <h3 className="text-[25px] font-medium mb-5">
                        {visibleSection.title}
                      </h3>
                      <p className="text-[25px] opacity-40 font-[400] leading-[35px]">
                        {visibleSection.info}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
              <div className="w-full h-full rounded-md mt-9 mx-10 sm:mx-0 lg:ml-20">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    ref={(el) => {
                      sectionRefs.current.set(section.id, el);
                    }}
                    data-id={section.id}
                    className="w-full h-[100vh] bg-[#C1C3C2] mt-10 rounded-md"
                  >
                    <ParallaxImage
                      src={section.src}
                      styling="rounded-md"
                      alt={section.alt}
                      height="100%"
                      width="100%"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-4 md:hidden">
            <h2 className="text-[#D2D5D5] text-5xl pt-10 !leading-snug mr-10">
              {moreAboutTitle}
            </h2>
            {sections.map((section) => (
              <div key={section.id} className="mt-10 mb-20">
                <div className="w-full mt-10 rounded-md relative" style={{ height: "200px" }}>
                  <Image
                    src={section.src}
                    alt={section.alt}
                    fill
                    sizes="auto"
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="text-[#D2D5D5] mt-10 text-[25px] font-semibold">
                  {section.title}
                </h3>
                <p className="text-[#828587] mt-5 text-[20px] font-semibold pb-10">
                  {section.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreAboutUs;
