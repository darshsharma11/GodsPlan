import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Icons matching the screenshots ---
const IconListExact = ({ active }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4V20M8 4L5 7M8 4L11 7M8 20L5 17M8 20L11 17"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8H20M14 12H20M14 16H20"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCard = ({ active }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="6"
      height="6"
      rx="1"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="4"
      width="6"
      height="6"
      rx="1"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
    />
    <rect
      x="4"
      y="14"
      width="6"
      height="6"
      rx="1"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="14"
      width="6"
      height="6"
      rx="1"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
    />
  </svg>
);

const IconPack = ({ active }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8C8 6.89543 8.89543 6 10 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H10C8.89543 18 8 17.1046 8 16V8Z"
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
      transform="rotate(-10 14 12)"
    />
    <rect
      x="6"
      y="8"
      width="10"
      height="10"
      rx="2"
      fill={active ? '#0EA5E9' : '#F3F4F6'}
      stroke={active ? 'white' : '#6B7280'}
      strokeWidth="1.5"
    />
  </svg>
);

const DiamondIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 inline-block"
  >
    <rect
      x="6"
      y="1.41421"
      width="6.5"
      height="6.5"
      rx="1"
      transform="rotate(45 6 1.41421)"
      fill="#FDE047"
      stroke="#FACC15"
      strokeWidth="0.5"
    />
  </svg>
);

// --- Data with Stable Image Strings ---
const collectiblesData = [
  {
    id: '1',
    title: 'Skilled Fingers Series',
    price: 0.855,
    currency: 'ETH',
    serial: '209',
    bgColor: 'bg-[#E5DFFF]',
    imgSrc: 'https://i.ibb.co/7N2JYRyD/shared-layout-asset-1.png',
  },
  {
    id: '2',
    title: 'Vibrant Vibes Series',
    price: 0.209,
    currency: 'ETH',
    serial: '808',
    bgColor: 'bg-[#E0EFFF]',
    imgSrc: 'https://i.ibb.co/0pm4hhcW/shared-layout-asset-2.png',
  },
];

export default function App() {
  const [activeView, setActiveView] = useState('list');

  const totalEth = collectiblesData
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(3);
  const totalItems = collectiblesData.length;

  // Snappy spring physics for smooth, precise DOM element tracking
  const transitionConfig = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      `,
        }}
      />

      {/* CRITICAL FIX: Hidden Preloader 
        Forces the preview environment's runtime CSS compiler to generate all layout classes instantly on page load.
        This entirely prevents Framer Motion from measuring unstyled 0x0 elements on the first click.
      */}
      <div className="hidden flex-col space-y-4 grid-cols-2 gap-x-4 gap-y-6 h-[240px] mt-4 items-center space-x-4 w-full bg-white rounded-2xl absolute left-[calc(50%-5rem)] top-0 w-40 h-40 rounded-3xl shadow-lg w-[72px] h-[72px] rounded-xl flex-shrink-0 aspect-square mb-3 opacity-0 pointer-events-none flex-1 min-w-0 py-1 mb-1 text-[17px] text-base text-[15px] text-sm pr-4 z-0 z-10" />

      <div
        className="min-h-screen bg-white flex justify-center py-12 text-gray-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="w-full max-w-md px-6 flex flex-col">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-6">Collectibles</h1>

          {/* View Toggle Buttons */}
          <div className="flex space-x-2 mb-6 relative z-20">
            <button
              onClick={() => setActiveView('list')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeView === 'list'
                  ? 'bg-[#15A6FF] text-white shadow-sm'
                  : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
              }`}
            >
              <IconListExact active={activeView === 'list'} />
              <span>List view</span>
            </button>

            <button
              onClick={() => setActiveView('card')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeView === 'card'
                  ? 'bg-[#15A6FF] text-white shadow-sm'
                  : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
              }`}
            >
              <IconCard active={activeView === 'card'} />
              <span>Card view</span>
            </button>

            <button
              onClick={() => setActiveView('pack')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeView === 'pack'
                  ? 'bg-[#15A6FF] text-white shadow-sm'
                  : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
              }`}
            >
              <IconPack active={activeView === 'pack'} />
              <span>Pack view</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="border-gray-100 mb-6" />

          {/* Animated Content Area */}
          <div className="w-full relative min-h-[350px]">
            {/* Pack View Summary - Fades in/out smoothly */}
            <AnimatePresence>
              {activeView === 'pack' && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute top-52 w-full flex flex-col items-center justify-center pointer-events-none"
                >
                  <h2 className="text-[22px] font-medium text-gray-900 mb-1">
                    {totalItems} Collectibles
                  </h2>
                  <div className="text-[17px]">
                    <span className="font-semibold text-gray-900">
                      {totalEth}
                    </span>
                    <span className="text-gray-400 font-medium ml-1">ETH</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Container - Changes layout structure directly */}
            <div
              className={`w-full relative ${
                activeView === 'list'
                  ? 'flex flex-col space-y-4'
                  : activeView === 'card'
                  ? 'grid grid-cols-2 gap-x-4 gap-y-6'
                  : 'h-[240px] mt-4' // Fixed height for pack bounds
              }`}
            >
              {collectiblesData.map((item, index) => {
                const isList = activeView === 'list';
                const isCard = activeView === 'card';
                const isPack = activeView === 'pack';
                const isBackCard = index === 0;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    className={
                      isList
                        ? 'flex items-center space-x-4 w-full bg-white rounded-2xl'
                        : isCard
                        ? 'flex flex-col w-full bg-white rounded-2xl'
                        : `absolute left-[calc(50%-5rem)] top-0 w-40 h-40 bg-white rounded-3xl shadow-lg`
                    }
                    // Apply explicit positions & rotations only for the Pack view
                    animate={
                      isPack
                        ? {
                            rotate: isBackCard ? -8 : 2,
                            x: isBackCard ? -12 : 12,
                            y: isBackCard ? 12 : 0,
                            zIndex: isBackCard ? 0 : 10,
                          }
                        : {
                            rotate: 0,
                            x: 0,
                            y: 0,
                            zIndex: 1,
                          }
                    }
                    transition={transitionConfig}
                    style={{ transformOrigin: 'center' }}
                  >
                    {/* Animated Thumbnail Wrapper */}
                    <motion.div
                      layout
                      className={`overflow-hidden ${item.bgColor} ${
                        isList
                          ? 'w-[72px] h-[72px] rounded-xl flex-shrink-0'
                          : isCard
                          ? 'w-full aspect-square rounded-2xl mb-3'
                          : 'w-full h-full rounded-3xl' // Pack bounds
                      }`}
                      transition={transitionConfig}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-full object-cover block"
                        draggable="false"
                      />
                    </motion.div>

                    {/* Animated Details Wrapper */}
                    <motion.div
                      layout
                      className={
                        // Detach from flow visually when entering stack
                        isPack
                          ? 'absolute opacity-0 pointer-events-none'
                          : isList
                          ? 'flex-1 min-w-0 py-1'
                          : 'w-full'
                      }
                      animate={{
                        opacity: isPack ? 0 : 1,
                        scale: isPack ? 0.9 : 1,
                      }}
                      transition={{
                        ...transitionConfig,
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <div
                        className={`flex justify-between items-baseline ${
                          isList ? 'mb-1' : 'mb-1'
                        }`}
                      >
                        <h3
                          className={`font-medium text-gray-900 truncate pr-4 ${
                            isList ? 'text-[17px]' : 'text-base'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`text-gray-500 font-medium flex-shrink-0 flex items-center ${
                            isList ? 'text-[15px]' : 'text-sm'
                          }`}
                        >
                          <DiamondIcon /> #{item.serial}
                        </div>
                      </div>
                      <div className={isList ? 'text-[15px]' : 'text-sm'}>
                        <span
                          className={`font-semibold text-gray-900 ${
                            isCard ? 'text-base' : ''
                          }`}
                        >
                          {item.price}
                        </span>
                        <span className="text-gray-400 font-medium ml-1">
                          {item.currency}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
