"use client";

import { useEffect } from "react";
import { Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#07111F] px-4 my-4">

      <Card className="max-w-lg w-full p-8 bg-white/5 border border-red-500/30 backdrop-blur-xl text-center rounded-2xl shadow-lg">

        {/* Emoji Icon */}
        <div className="text-5xl mb-4 animate-bounce">
          🚨
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-400">
          Oops! Something broke 😵
        </h1>

        {/* Message */}
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          Don’t worry 😌 — it’s not your fault.  
          Something unexpected happened in <span className="text-cyan-400 font-semibold">StudyNook</span>.
        </p>

        {/* Error details (dev only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-5 text-left text-xs bg-black/30 p-3 rounded-lg text-red-300 overflow-auto">
            <span className="text-yellow-400">⚠ Error:</span> {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-6 justify-center">

          <Button
            onPress={() => reset()}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
          >
            🔄 Try Again
          </Button>

          <Button
            onPress={() => router.push("/")}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30"
          >
            🏠 Go Home
          </Button>

        </div>

      </Card>
    </div>
  );
}