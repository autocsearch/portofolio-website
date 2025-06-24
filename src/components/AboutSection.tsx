"use client";

import Image from "next/image";
import { SetStateAction, useState, useTransition } from "react";
import TabButton from "./TabButton";

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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <p className="text-base lg:text-lg mb-2">
            A passionate fullstack web developer with a strong foundation in building modern, scalable applications using technologies like Next.js, Express, MySQL, and Prisma. Dedicated to crafting clean, responsive user interfaces and
            efficient backend systems, with hands-on experience in developing full-featured projects such as rental platforms and event management systems.
          </p>
          <p className="text-base lg:text-lg">
            Always eager to learn and improve, I enjoy tackling complex challenges and turning ideas into real-world solutions. Whether collaborating on a team or working independently, I strive to deliver work that is both functional and
            thoughtfully designed.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={showTab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("Education")} active={showTab === "Education"}>
              Educations
            </TabButton>
          </div>
          <div className="mt-8 hover:mask-b-to-purple-600">{tabData.find((t) => t.id === showTab)?.content}</div>
        </div>
      </div>
    </section>
  );
}
