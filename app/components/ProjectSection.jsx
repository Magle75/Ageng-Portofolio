"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Info Pasar Rebo Website",
    description: "Website Profile Company using Bootstrap Frameworks",
    image: "/ImageProjects/projek3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Magle75/InfoPasarRebo.github.io",
    previewUrl: "https://magle75.github.io/InfoPasarRebo.github.io/",
  },
  {
    id: 2,
    title: "BantuinYuk Apps",
    description:
      "Skripsi Project Mobile App using React Native Frameworks, Firebase Database, and OpenStreetMap API",
    image: "/ImageProjects/projek1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Magle75/Bantuinyuk.git",
    previewUrl:
      "https://www.instagram.com/reel/CylPYALRFgh/?igshid=Zm8zZTh2anphNjM4",
  },
  {
    id: 3,
    title: "Laundry Apps",
    description:
      "Laundry Apps using React Native, Firebase Database and React Redux",
    image: "/ImageProjects/projek2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Magle75/LaundryApp.git",
    previewUrl:
      "https://www.instagram.com/reel/CylOOp8xMW7/?igshid=Z3Y0cWJ4OHMxdWZj",
  },
  {
    id: 4,
    title: "Altair Aquila Website",
    description:
      "Vtuber Website using NextJS and tailwind css.",
    image: "/ImageProjects/projek4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Magle75/Altair-Aquila-Website",
    previewUrl:
      "https://altair-aquila.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
const filterProjek = projectsData.filter((project) =>
project.tag.includes(tag)
);
  return (
    <section id="Project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjek.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
