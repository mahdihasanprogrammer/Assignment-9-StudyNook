"use client"
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827]">

      {/* Outer Glow Aura */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Soft background glow */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glass Card */}
        <div className="relative flex flex-col items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-12 py-10 shadow-[0_10px_50px_rgba(34,211,238,0.12)]">

          {/* Spinner Container */}
          <div className="relative w-20 h-20">

            {/* Static ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20" />

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-300/40"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear"
              }}
            />

            {/* Inner pulse core */}
            <motion.div
              className="absolute inset-5 rounded-full bg-cyan-400/20 blur-sm"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />

          </div>

          {/* Loading Text */}
          <motion.div
            className="text-cyan-400 text-sm font-medium tracking-wide"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading StudyNook...
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;