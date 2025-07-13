"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarPages = [
    { name: "Home", href: "#hero" },
    { name: "About me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className={`fixed left-0 top-0 z-20 w-full transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div>
        {/* Navbar desktop */}
        <div className="justify-between items-center h-12 text-black hidden lg:flex p-6">
          <div>
            <Link href={"/"} className="font-bold text-3xl p-6">
              Charles.Dev
            </Link>
          </div>
          <div className="flex p-6">
            <ul className="flex gap-4 ">
              {NavbarPages.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <Button variant={"ghost"} className="hover:bg-slate-300">
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center h-12 lg:hidden p-6">
          <div>
            <Link href={"/"} className="text-black font-bold text-3xl">
              Charles.Dev
            </Link>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"secondary"} className="text-black">
                  Menu
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col w-full gap-2 ">
                <ul>
                  {NavbarPages.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>
                        <Button variant={"ghost"} className="hover:bg-slate-300">
                          {item.name}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
