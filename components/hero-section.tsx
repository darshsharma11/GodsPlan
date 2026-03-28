"use client";

import { motion } from "framer-motion";
import { PhoneMockup, ChatScreen, OrbScreen } from "./phone-mockup";

export function HeroSection() {
  // Animation timeline (5 seconds total):
  // 0.0s - 0.6s: First phone (chat "Hello Saad") slides up - fully visible
  // 0.5s - 1.1s: Second phone (chat) slides up and COVERS the first
  // 1.0s - 1.6s: Third phone (orb) slides up and COVERS the second
  // 2.0s - 3.0s: Phones spread into fan formation (NO rotation - all straight)
  // 3.0s - 4.0s: Phones move down slightly, text appears from top
  // 4.0s - 5.0s: Everything settles

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
        transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
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
        style={{ height: "480px" }}
      >
        {/* FIRST Phone - Chat Screen "Hello Saad" (appears first, goes LEFT) */}
        <motion.div
          className="absolute z-20"
          initial={{ y: 700, x: 0 }}
          animate={{
            y: [700, 0, 0, 0, 80, 80],
            x: [0, 0, 0, 0, -260, -260],
          }}
          transition={{
            duration: 5,
            times: [0, 0.12, 0.32, 0.40, 0.60, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>

        {/* SECOND Phone - Chat Screen (slides up and COVERS first, goes RIGHT) */}
        <motion.div
          className="absolute z-20"
          initial={{ y: 700, x: 0 }}
          animate={{
            y: [700, 700, 0, 0, 80, 80],
            x: [0, 0, 0, 0, 260, 260],
          }}
          transition={{
            duration: 5,
            times: [0, 0.10, 0.22, 0.40, 0.60, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>

        {/* THIRD Phone - Orb Screen (slides up LAST and COVERS second, stays CENTER and elevated) */}
        <motion.div
          className="absolute z-30"
          initial={{ y: 700 }}
          animate={{
            y: [700, 700, 700, 0, -20, -20],
          }}
          transition={{
            duration: 5,
            times: [0, 0.18, 0.20, 0.32, 0.60, 1],
            ease: "easeInOut",
          }}
        >
          <PhoneMockup>
            <OrbScreen />
          </PhoneMockup>
        </motion.div>
      </motion.div>
    </section>
  );
}
