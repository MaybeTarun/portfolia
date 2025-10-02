import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BaymaxHelmet from "./BaymaxHelmet";

interface BaymaxFaceProps {
  shadowX?: number;
  shadowY?: number;
  helmetOn?: boolean;
}

const BaymaxFace: React.FC<BaymaxFaceProps> = ({ shadowX = 4, shadowY = -4, helmetOn = false }) => {
  const faceRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showHelmet, setShowHelmet] = useState(helmetOn);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!faceRef.current) return;

      const rect = faceRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const maxOffset = 6;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        const scale = Math.min(maxOffset / distance, 1);
        setOffset({
          x: dx * scale,
          y: dy * scale,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex justify-center items-center">

      <div
        ref={faceRef}
        className="relative bg-[#f9f9f9] rounded-[50%] w-32 md:w-40 h-[86px] md:h-28 flex items-center justify-center cursor-pointer"
        style={{
          boxShadow: `inset ${shadowX}px ${shadowY}px 8px rgba(0,0,0,0.25)`,
        }}
        onClick={() => setShowHelmet((prev) => !prev)}
      >
        <div
          className="flex items-center"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          <div className="w-[12px] md:w-[18px] h-[14px] md:h-5 bg-black rounded-[50%] -mr-1 md:-mr-2 blink"></div>
          <svg
            className="mx-1 w-10 md:w-14 h-[6px] mt-1"
            viewBox="0 0 60 6"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 3 Q30 1 60 3"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="w-[12px] md:w-[18px] h-[14px] md:h-5 bg-black rounded-[50%] -ml-1 md:-ml-2 blink"></div>
        </div>
      </div>

      <AnimatePresence>
        {showHelmet && (
          <motion.div
            className="absolute pointer-events-none"
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: "-10%", opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <BaymaxHelmet className="w-36 md:w-44 h-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BaymaxFace;
