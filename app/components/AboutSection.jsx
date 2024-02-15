"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TombolTab from "./TombolTab";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>ReactJs</li>
        <li>ReactNative</li>
        <li>NextJs</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>Firebase Database</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Krisnadwipayana</li>
        <li>Computer Science Degree</li>
        <li>GPA 3.44</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="About" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/img/ageng2.jpg" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-clip flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Fresh Graduate who seeks to gain experience in the field of
            Technology & Development with excellent front-end coding skills,
            strong time management abilities, effective communication, and
            readiness to work under pressure. Possesses outstanding attention to
            detail and a high degree of precision for both team and individual
            work with a proactive attitude.
          </p>
          <div className="flex flex-row mt-4 justify-start">
            <TombolTab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TombolTab>
            <TombolTab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TombolTab>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
