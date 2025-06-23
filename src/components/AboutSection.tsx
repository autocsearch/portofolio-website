"use client";

import Image from "next/image";
import { SetStateAction, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { title } from "process";
import { Content } from "next/font/google";

const tabData = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Mysql</li>
        <li>Express</li>
        <li>Next js</li>
        <li>Prisma</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li>Purwadhika</li>
        <li>Smas Budi Luhur</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul>
        <li>Oasis Project</li>
        <li>Shopedia Project</li>
        <li>Real Time Chat app</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [showTab, setShowTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: SetStateAction<string>) => {
    startTransition(() => {
      setShowTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/profile.svg"} alt="About me Image" height={500} width={500} className="rounded-3xl bg-slate-400" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <p className="text-base lg:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui fuga dicta magnam illo, eligendi officia nihil facere, autem excepturi nesciunt veritatis repudiandae obcaecati porro! Nobis accusantium asperiores ullam eaque.
            Hic, accusamus minima ad minus perferendis tempora ipsa rem aliquid in quae voluptates quod tenetur fugit maxime cum? Adipisci, voluptate? Eum nisi eligendi natus aperiam id maiores cupiditate vero ipsum!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={showTab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Education")} active={showTab === "Education"}>
              Educations
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Experience")} active={showTab === "Experience"}>
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{tabData.find((t) => t.id === showTab)?.content}</div>
        </div>
      </div>
    </section>
  );
}
