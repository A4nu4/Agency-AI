import React from "react";
import { m } from "motion/react";
import assets from "@/assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </m.div>

      <m.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </m.h1>

      <m.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </m.p>

      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="/hero_img.webp"
          srcSet="/hero_img-sm.webp 768w, /hero_img-md.webp 1466w, /hero_img.webp 1920w"
          sizes="(max-width: 768px) 100vw, (max-width: 1466px) 1466px, 1920px"
          alt=""
          loading="eager"
          width="1920"
          height="1056"
          className="w-full h-auto max-w-6xl object-cover"
        />
        <img
          src="/bgImage1.webp"
          srcSet="/bgImage1-sm.webp 760w, /bgImage1-md.webp 1466w, /bgImage1.webp 1920w"
          sizes="(max-width: 760px) 100vw, (max-width: 1466px) 1466px, 1920px"
          alt=""
          width="1920"
          height="1415"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </m.div>
    </div>
  );
};

export default Hero;
