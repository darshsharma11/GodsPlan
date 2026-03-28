"use client";

import { motion } from "framer-motion";
import { PhoneMockup, ChatScreen, OrbScreen } from "./phone-mockup";

export function HeroSection() {
  // Animation timeline (5 seconds total):
  // 0.0s - 0.6s: First phone (center/orb) rises up
  // 0.4s - 1.0s: Second phone rises up (stacks behind)
  // 0.8s - 1.4s: Third phone rises up (stacks behind)
  // 1.5s - 2.5s: Phones spread into fan formation
  // 2.5s - 3.5s: Phones move down, text appears from top
  // 3.5s - 5.0s: Everything settles

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Navigation - always visible */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6">
        <div className="flex items-center gap-6 bg-black rounded-full px-4 py-2.5">
          <div className="w-7 h-7 bg-white rounded-full" />
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">Components</span>
            <span className="text-white text-sm">Snippets</span>
            <span className="text-white text-sm">Templates</span>
          </div>
          <button className="text-white text-sm font-medium ml-8">
            Try for Free
          </button>
        </div>
      </nav>

      {/* Hero Content - appears after phones spread */}
      <motion.div
        className="relative z-40 pt-24 text-center px-4"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block mb-6">
          <span className="text-sm text-gray-600 px-4 py-2 border border-gray-200 rounded-full">
            Join Our Waitlist and claim instant offer
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-4 text-balance">
          Transform Ideas into Reality
          <br />
          With Vynk
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-6">
          Roll up beautiful UIs effortlessly by using Vynk CLI in minutes so that you can
          focus on building the core of your product.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Try for Free
        </button>
      </motion.div>

      {/* Phone container */}
      <motion.div 
        className="relative w-full flex items-center justify-center mt-8"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        style={{ height: "480px" }}
      >
        {/* Left Phone - Chat Screen */}
        <motion.div
          className="absolute z-10"
          initial={{ y: 600, x: 0, rotate: 0, scale: 0.9 }}
          animate={{
            y: [600, 0, 0, 0, 40],
            x: [0, 0, 0, -180, -180],
            rotate: [0, 0, 0, -5, -5],
            scale: [0.9, 0.9, 0.9, 0.9, 0.9],
          }}
          transition={{
            duration: 5,
            times: [0, 0.16, 0.30, 0.52, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>

        {/* Center Phone - Orb Screen (appears first) */}
        <motion.div
          className="absolute z-20"
          initial={{ y: 600, scale: 1 }}
          animate={{
            y: [600, -20, -20, -20, -10],
            scale: [1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 5,
            times: [0, 0.12, 0.30, 0.52, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <OrbScreen />
          </PhoneMockup>
        </motion.div>

        {/* Right Phone - Chat Screen */}
        <motion.div
          className="absolute z-10"
          initial={{ y: 600, x: 0, rotate: 0, scale: 0.9 }}
          animate={{
            y: [600, 0, 0, 0, 40],
            x: [0, 0, 0, 180, 180],
            rotate: [0, 0, 0, 5, 5],
            scale: [0.9, 0.9, 0.9, 0.9, 0.9],
          }}
          transition={{
            duration: 5,
            times: [0, 0.20, 0.30, 0.52, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>
      </motion.div>
    </section>
  );
}
