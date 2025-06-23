"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start text-center sm:text-left">
          <h1 className="text-white max-w-2xl mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-200">Hi there, I&apos;m</span> <br />
            <span className="text-white text-4xl sm:text-5xl lg:text-6xl">
              <TypeAnimation sequence={["Charles", 1000, "Web Developer", 1000]} wrapper="span" speed={50} className="inline-block" repeat={Infinity} />
            </span>
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <div className="flex gap-4 mt-6">
            <Button variant={"outline"} className="hover:bg-slate-200">
              Hire me
            </Button>
            <Button className="hover:bg-slate-200 hover:text-black">Download CV</Button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-gradient-to-br from-blue-500 via-purple-300 to-pink-500 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image src={"hello.svg"} alt="hello image" height={300} width={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
