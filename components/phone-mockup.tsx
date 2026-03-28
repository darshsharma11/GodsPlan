"use client";

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl",
        "border-[3px] border-[#2a2a2a]",
        className
      )}
    >
      {/* Phone frame inner bezel */}
      <div className="absolute inset-3 rounded-[32px] overflow-hidden bg-[#0a0a0a]">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-20">
          <span className="text-white text-xs font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" opacity="0.3"/>
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
            </svg>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30" />

        {/* Screen content */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ChatScreen() {
  return (
    <div className="w-full h-full bg-[#0f0f0f] flex flex-col">
      {/* Header */}
      <div className="pt-12 px-4 pb-3 border-b border-[#222]">
        <h2 className="text-white text-sm font-semibold">Chat GPT GO</h2>
      </div>

      {/* Chat content */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <p className="text-white text-xl font-bold leading-tight">
          Hello Saad,
        </p>
        <p className="text-white text-xl font-bold leading-tight mt-1">
          How can I help you today?
        </p>
      </div>

      {/* Input bar */}
      <div className="p-4 pb-8">
        <div className="bg-[#1a1a1a] rounded-full px-4 py-3 flex items-center gap-2">
          <span className="text-[#666] text-lg">+</span>
          <span className="text-[#666] text-sm">Ask anything...</span>
        </div>
      </div>
    </div>
  );
}

export function OrbScreen() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient orb */}
      <div className="relative w-40 h-40 mb-8">
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(168,85,247,0.6) 50%, rgba(59,130,246,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-4 rounded-full blur-2xl opacity-80"
          style={{
            background: "radial-gradient(circle, rgba(251,207,232,0.9) 0%, rgba(236,72,153,0.7) 50%, rgba(168,85,247,0.5) 100%)",
          }}
        />
        <div
          className="absolute inset-8 rounded-full blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(251,207,232,0.8) 50%, rgba(236,72,153,0.6) 100%)",
          }}
        />
      </div>

      {/* Text */}
      <p className="text-white/90 text-center text-lg font-medium px-8">
        How can I help you today?
      </p>
    </div>
  );
}
