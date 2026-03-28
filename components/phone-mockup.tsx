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
        "relative w-[220px] h-[440px] bg-white rounded-[36px] p-2",
        "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15),0_2px_8px_-2px_rgba(0,0,0,0.08)]",
        "border border-gray-100",
        className
      )}
    >
      {/* Phone frame inner */}
      <div className="absolute inset-2 rounded-[28px] overflow-hidden bg-white">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-8 px-4 flex items-center justify-between z-20 bg-white">
          <div className="flex items-center gap-1">
            <span className="text-black text-[11px] font-semibold">9:41</span>
            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 17l10-9 10 9-2 2-8-7.25L4 19z" />
            </svg>
          </div>
          
          {/* Dynamic Island */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
          
          <div className="flex items-center gap-0.5">
            <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="6" width="3" height="12" rx="1" opacity="0.3"/>
              <rect x="9" y="4" width="3" height="14" rx="1" opacity="0.5"/>
              <rect x="14" y="2" width="3" height="16" rx="1" opacity="0.7"/>
              <rect x="19" y="0" width="3" height="18" rx="1"/>
            </svg>
            <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2a8 8 0 018 8h-2a6 6 0 00-6-6V2zm0 4a4 4 0 014 4h-2a2 2 0 00-2-2V6z"/>
              <circle cx="14" cy="10" r="2"/>
            </svg>
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="20" y="10" width="2" height="4" rx="1"/>
              <rect x="4" y="9" width="8" height="6" rx="1"/>
            </svg>
          </div>
        </div>

        {/* Screen content */}
        <div className="relative w-full h-full rounded-[28px] overflow-hidden pt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ChatScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-2 flex items-center gap-2">
        <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
        <span className="text-black text-xs font-medium">Chat GPT GO</span>
      </div>

      {/* Chat content */}
      <div className="flex-1 px-4 flex flex-col justify-center">
        <p className="text-black text-xl font-bold leading-tight">
          Hello Saad,
        </p>
        <p className="text-black text-xl font-bold leading-tight">
          How can I help
        </p>
        <p className="text-black text-xl font-bold leading-tight">
          you today?
        </p>
      </div>

      {/* Input bar */}
      <div className="px-3 pb-6">
        <div className="bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
          <span className="text-gray-400 text-sm">+</span>
          <span className="text-gray-400 text-xs">Ask anything...</span>
        </div>
      </div>
    </div>
  );
}

export function OrbScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient orb */}
      <div className="relative w-28 h-28 mb-6">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(219,182,224,0.9) 0%, rgba(232,180,216,0.7) 40%, rgba(245,210,230,0.4) 70%, transparent 100%)",
          }}
        />
        {/* Inner orb */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(232,196,220,0.95) 30%, rgba(200,170,210,0.9) 60%, rgba(180,150,200,0.85) 100%)",
          }}
        />
        {/* Highlight */}
        <div
          className="absolute top-3 left-3 w-8 h-8 rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

      {/* Text */}
      <p className="text-black text-center text-base font-medium">
        How can I help
      </p>
      <p className="text-black text-center text-base font-medium">
        you today?
      </p>
    </div>
  );
}
