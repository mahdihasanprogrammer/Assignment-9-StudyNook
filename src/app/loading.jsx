"use client"
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827]">

      {/* Glass Container */}
      <div className="flex flex-col items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-10 py-10 shadow-[0_10px_40px_rgba(34,211,238,0.15)]">

        {/* Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-cyan-400/20"
          />

          {/* Animated Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1
            }}
          />

          {/* Inner Glow Dot */}
          <motion.div
            className="absolute inset-4 rounded-full bg-cyan-400/20 blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2
            }}
          />
        </div>

        {/* Text */}
        <motion.p
          className="text-cyan-400 text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          Loading StudyNook...
        </motion.p>

      </div>
    </div>
  );
};

export default LoadingSpinner;