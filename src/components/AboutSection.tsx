"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Image */}
          <div className="bg-blue-100 p-6 rounded-xl flex flex-1 items-center justify-center">
            <Image src="/profile.svg" width={300} height={300} alt="Profile" className="h-40 sm:h-48 md:h-64 object-contain" />
          </div>

          {/* Skills */}
          <div className="bg-green-100 p-6 rounded-xl flex flex-col w-full md:w-[400px] justify-center items-center">
            <h4 className="font-semibold mb-2 text-lg">🧠 Skills</h4>
            <ul className="text-sm space-y-1 text-center">
              <li>Next.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Prisma</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Education */}
          <div className="bg-orange-100 p-6 rounded-xl flex flex-col w-full md:w-[400px] justify-center">
            <h4 className="font-semibold mb-2 text-lg">🎓 Where I’ve Studied</h4>
            <ul className="text-sm space-y-1">
              <li>
                <span className="font-medium">Purwadhika</span> — Fullstack Web Development Bootcamp
              </li>
              <li>
                <span className="font-medium">Smas Budi Luhur</span> — High School
              </li>
            </ul>
          </div>

          {/* Description */}
          <div className="bg-blue-50 p-6 rounded-xl flex flex-col flex-1 justify-center w-[300px] h-[300px]">
            <h3 className="text-xl font-bold mb-2">👋 Hey, I&apos;m Charles</h3>
            <p className="text-sm text-gray-700">
              A passionate fullstack web developer focused on building clean, responsive, and scalable apps using Next.js, Express, MySQL, and Prisma. I&apos;m always eager to learn and deliver thoughtfully designed solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
