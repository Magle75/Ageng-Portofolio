"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
              Loha, I'm{" "}
            </span>
            <TypeAnimation
              sequence={["Ageng", 2000, "FrontEnd Developer", 2000]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            22-year-old Computer Science Degree From Krinsadwipayana University.
            Passionate in programming, Web developing, and Gaming.
          </p>
          <div>
          <Link
              href="#Contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 to-violet-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1Nv_dvU5L1ldYGyxccAiUPPGCDhY_Fzvg?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 to-violet-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/img/img-ageng.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
