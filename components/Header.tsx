"use client";
import { book, chart, home, login } from "@/utils/Icons";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    { name: "Home",     icon: home,  link: "/" },
    { name: "Learn",    icon: book,  link: "/learn" },
    { name: "My Stats", icon: chart, link: "/stats" },
  ];

  return (
    <header className="min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center bg-white sticky top-0 z-50">
      <nav className="flex-1 flex items-center justify-between">

        {/* Logo — silver blob */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Optimum"
            className="h-7 w-auto object-contain drop-shadow"
          />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black text-indigo-600 tracking-tight">Optimum</span>
            <span className="text-[0.6rem] font-semibold text-purple-400 uppercase tracking-widest leading-none">
              Quiz Hub
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`py-1 px-6 flex items-center gap-2 text-lg leading-none text-gray-400 rounded-lg
                  ${pathname === item.link
                    ? "bg-indigo-500/20 text-indigo-500 border-2 border-indigo-500"
                    : ""
                  }`}
              >
                <span className="text-2xl text-indigo-500">{item.icon}</span>
                <span className={`font-bold uppercase ${pathname === item.link ? "text-indigo-500" : "text-gray-400"}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth */}
        <div>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-12 h-12 border-2 border-indigo-300 rounded-full",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <Button
              className="py-5 bg-indigo-500 flex items-center gap-2 font-semibold text-lg rounded-lg hover:bg-indigo-600/90"
              onClick={() => router.push("/sign-in")}
            >
              {login} Login / Sign Up
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
