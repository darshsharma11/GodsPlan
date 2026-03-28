"use client";

import { motion } from "framer-motion";
import { PhoneMockup, ChatScreen, OrbScreen } from "./phone-mockup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.1) 30%, transparent 70%)",
        }}
      />

      {/* Phone container */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-4">
        {/* Left Phone */}
        <motion.div
          className="absolute z-10"
          initial={{ y: "100vh", x: "-50%", scale: 0.9 }}
          animate={{
            y: [null, 0, 0],
            x: ["-50%", "-50%", "-120%"],
            scale: [0.9, 0.9, 0.85],
            rotate: [0, 0, -5],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: [
              [0, 0, 0.2, 1], // ease-out for entry
              [0.34, 1.56, 0.64, 1], // spring for spread
            ],
            delay: 0,
          }}
          style={{ left: "50%" }}
        >
          <PhoneMockup className="shadow-[0_25px_100px_-12px_rgba(236,72,153,0.25)]">
            <ChatScreen />
          </PhoneMockup>
        </motion.div>

        {/* Center Phone */}
        <motion.div
          className="relative z-20"
          initial={{ y: "100vh", scale: 1 }}
          animate={{
            y: [null, 0, -20],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: [
              [0, 0, 0.2, 1],
              [0.34, 1.56, 0.64, 1],
            ],
            delay: 0,
          }}
        >
          <PhoneMockup className="shadow-[0_25px_100px_-12px_rgba(168,85,247,0.35)]">
            <OrbScreen />
          </PhoneMockup>
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="absolute z-10"
          initial={{ y: "100vh", x: "50%", scale: 0.9 }}
          animate={{
            y: [null, 0, 0],
            x: ["50%", "50%", "120%"],
            scale: [0.9, 0.9, 0.85],
            rotate: [0, 0, 5],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: [
              [0, 0, 0.2, 1],
              [0.34, 1.56, 0.64, 1],
            ],
            delay: 0,
          }}
          style={{ right: "50%" }}
        >
          <PhoneMockup className="shadow-[0_25px_100px_-12px_rgba(236,72,153,0.25)]">
            <ChatScreen />
          </PhoneMockup>
        </motion.div>
      </div>

      {/* Optional: Title text */}
      <motion.div
        className="absolute top-16 left-0 right-0 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Chat GPT GO
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Your AI assistant, everywhere you go
        </p>
      </motion.div>
    </section>
  );
}
