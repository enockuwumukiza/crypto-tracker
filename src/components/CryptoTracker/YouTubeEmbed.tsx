import { motion } from "framer-motion";
import React from "react";

const YouTubeEmbed: React.FC = () => {
  return (
    <motion.div
      className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl max-w-5xl mx-auto mt-10 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        🎥 Project Demo – CryptoWatch
      </h2>

      <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
        <iframe
          width="560"
          height="315"
          className="w-full h-full"
          src="https://www.youtube.com/embed/gV1kz1-C454?si=KN9_DL2MVYdfXi9G"
          title="CryptoWatch Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p className="mt-6 text-center text-base text-white/70">
        This video walkthrough covers the CryptoWatch interface, real-time data updates via Binance WebSocket, 
        Redux-based state flow, and the design thought process behind this modern crypto tracking dashboard.
      </p>
    </motion.div>
  );
};

export default YouTubeEmbed;
