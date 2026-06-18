"use client";
import React, { useState } from "react";

export default function BuilderAvatar() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-20 h-20 rounded-2xl border-2 border-indigo-200 overflow-hidden bg-white shrink-0 shadow-md">
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
          <span className="text-3xl">🥷</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/builder/avatar.png"
          alt="Ajmul"
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
