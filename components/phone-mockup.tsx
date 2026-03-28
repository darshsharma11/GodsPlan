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
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full" />
          
          <div className="flex items-center gap-1">
            {/* Signal bars */}
            <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="12" width="3" height="6" rx="0.5"/>
              <rect x="9" y="8" width="3" height="10" rx="0.5"/>
              <rect x="14" y="4" width="3" height="14" rx="0.5"/>
              <rect x="19" y="1" width="3" height="17" rx="0.5"/>
            </svg>
            {/* Bluetooth icon */}
            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L17 7L13 11L17 15L12 20V13L8 17L6.5 15.5L11.5 10.5L6.5 5.5L8 4L12 8V2ZM13 4.83V8.17L14.88 6.29L13 4.83ZM13 12.83V16.17L14.88 14.29L13 12.83Z"/>
            </svg>
            {/* Battery */}
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="20" y="10" width="2" height="4" rx="0.5"/>
              <rect x="4" y="9" width="10" height="6" rx="1"/>
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
      <div className="px-4 py-2 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9"/>
          <ellipse cx="12" cy="12" rx="3.5" ry="9"/>
          <path d="M3 12h18"/>
          <path d="M4.5 7h15"/>
          <path d="M4.5 17h15"/>
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
