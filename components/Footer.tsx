import Link from "next/link";
import React from "react";
import BuilderAvatar from "./BuilderAvatar";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.002 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const YTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const sections = [
  {
    heading: "Product",
    links: [
      { label: "OptimumP2P",    href: "https://www.getoptimum.xyz/" },
      { label: "Optimum DeRAM", href: "https://www.getoptimum.xyz/" },
      { label: "Flexnodes",     href: "https://www.getoptimum.xyz/" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Team",       href: "https://www.getoptimum.xyz/" },
      { label: "Careers",    href: "https://www.getoptimum.xyz/" },
      { label: "Brand",      href: "https://www.getoptimum.xyz/" },
      { label: "Contact Us", href: "mailto:hello@getoptimum.xyz" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs",           href: "https://www.getoptimum.xyz/" },
      { label: "Press",          href: "https://www.getoptimum.xyz/" },
      { label: "Blog",           href: "https://www.getoptimum.xyz/" },
      { label: "Research Paper", href: "https://arxiv.org/abs/2601.13146" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 bg-white mt-16">
      <div className="px-[10rem] xl:px-[15rem] py-14 space-y-12">

        {/* ── OPTIMUM DATA ── */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
            Optimum Data
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Brand + social */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <Link href="/" className="flex items-center gap-3 w-fit">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="Optimum" className="h-7 w-auto object-contain drop-shadow" />
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black text-indigo-600 tracking-tight">Optimum</span>
                  <span className="text-[0.6rem] font-semibold text-purple-400 uppercase tracking-widest">Quiz Hub</span>
                </div>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                The Universal Data Acceleration Network — making blockchains faster,
                more efficient, and ready for a global digital economy. Powered by RLNC.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://x.com/getoptimum" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-gray-200
                    text-gray-600 text-xs font-bold hover:border-black hover:text-black transition-colors">
                  <XIcon /> X / Twitter
                </a>
                <a href="https://discord.gg/getoptimum" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-gray-200
                    text-gray-600 text-xs font-bold hover:border-indigo-500 hover:text-indigo-500 transition-colors">
                  <DiscordIcon /> Discord
                </a>
                <a href="https://www.youtube.com/@getoptimum" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-gray-200
                    text-gray-600 text-xs font-bold hover:border-red-500 hover:text-red-500 transition-colors">
                  <YTIcon /> YouTube
                </a>
              </div>
            </div>

            {/* Link columns */}
            {sections.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{col.heading}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-indigo-600 font-medium transition-colors flex items-center gap-1 group">
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-50 text-xs transition-opacity">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── BUILDER INFO ── */}
        <div className="border-t-2 pt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
            Built By
          </p>
          <div className="flex items-center gap-5 p-5 rounded-2xl border-2 border-indigo-100
            bg-gradient-to-r from-indigo-50 to-purple-50 w-fit">
            {/* Avatar — client component handles fallback */}
            <BuilderAvatar />
            {/* Info */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-0.5">Builder</p>
                <p className="text-lg font-black text-gray-800 leading-tight">Ajmul</p>
                <p className="text-sm text-gray-500">Optimum Community Builder</p>
              </div>
              <a href="https://x.com/riyadhisla58886" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold
                  hover:bg-gray-800 transition-colors w-fit">
                <XIcon /> @riyadhisla58886
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t-2 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Optimum Quiz Hub — Built for the Optimum community.
          </p>
          <a href="https://www.getoptimum.xyz/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Optimum" className="h-4 w-auto object-contain" />
            Powered by Optimum Protocol ↗
          </a>
        </div>

      </div>
    </footer>
  );
}
