import Link from "next/link";
import { FaSearch, FaHome } from "react-icons/fa";


const NotFound = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827] px-6">

      {/* Glass Card */}
      <div className="text-center max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_rgba(34,211,238,0.15)]">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-2xl bg-cyan-400/10 border border-white/10 flex items-center justify-center">
            <FaSearch className="text-cyan-400 text-3xl" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-white">
          404
        </h1>

        <h2 className="text-xl font-semibold text-cyan-400 mt-2">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-3 text-sm leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Let’s take you back to a safe place.
        </p>

        {/* Button */}
        <Link href="/">
        <button
          className="mt-6 flex items-center justify-center gap-2 mx-auto bg-cyan-400 hover:bg-cyan-500 text-[#07111F] px-5 py-2 rounded-xl font-medium transition"
        >
          <FaHome />
          Back to Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;