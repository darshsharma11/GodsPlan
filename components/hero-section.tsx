"use client";

import { motion } from "framer-motion";
import { PhoneMockup, ChatScreen, OrbScreen } from "./phone-mockup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Navigation */}
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

      {/* Hero Content */}
      <motion.div
        className="absolute top-32 left-0 right-0 text-center z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="inline-block mb-6">
          <span className="text-sm text-gray-600 px-4 py-2 border border-gray-200 rounded-full">
            Join Our Waitlist and claim instant offer
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-4 text-balance">
          Transform Ideas into Reality
          <br />
          With Vynk
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto mb-8">
          Roll up beautiful UIs effortlessly by using Vynk CLI in minutes so that you can
          focus on building the core of your product.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Try for Free
        </button>
      </motion.div>

      {/* Phone container - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-0">
        {/* Left Phone */}
        <motion.div
          className="absolute z-10"
          initial={{ y: "100vh" }}
          animate={{
            y: ["100vh", "0%", "0%", "0%"],
            x: ["0%", "0%", "0%", "-65%"],
            rotate: [0, 0, 0, -3],
          }}
          transition={{
            duration: 2.4,
            times: [0, 0.35, 0.5, 1],
            ease: "easeOut",
          }}
          style={{ 
            transformOrigin: "bottom center",
            marginBottom: "-80px"
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>

        {/* Center Phone */}
        <motion.div
          className="relative z-20"
          initial={{ y: "100vh" }}
          animate={{
            y: ["100vh", "-10%", "-10%"],
          }}
          transition={{
            duration: 1.8,
            times: [0, 0.6, 1],
            ease: "easeOut",
          }}
          style={{ marginBottom: "-60px" }}
        >
          <PhoneMockup>
            <OrbScreen />
          </PhoneMockup>
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="absolute z-10"
          initial={{ y: "100vh" }}
          animate={{
            y: ["100vh", "0%", "0%", "0%"],
            x: ["0%", "0%", "0%", "65%"],
            rotate: [0, 0, 0, 3],
          }}
          transition={{
            duration: 2.4,
            times: [0, 0.35, 0.5, 1],
            ease: "easeOut",
          }}
          style={{ 
            transformOrigin: "bottom center",
            marginBottom: "-80px"
          }}
        >
          <PhoneMockup>
            <ChatScreen />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
}
