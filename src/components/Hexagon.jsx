import { motion } from "framer-motion";

// Ambient nested hexagons that slowly rotate. Pure SVG + framer-motion.
const Hex = ({ size, opacity, dur, reverse = false }) => (
  <motion.svg
    aria-hidden="true"
    viewBox="0 0 200 200"
    width={size}
    height={size}
    className="absolute inset-0 m-auto"
    style={{ opacity }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration: dur, ease: "linear", repeat: Infinity }}
  >
    <polygon
      points="100,4 186,52 186,148 100,196 14,148 14,52"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    />
  </motion.svg>
);

const Hexagon = () => {
  return (
    <div
      data-testid="hero-hexagon"
      className="relative aspect-square w-[280px] sm:w-[360px] md:w-[440px] text-[color:var(--rp-text-primary)]"
    >
      <Hex size="100%" opacity={0.18} dur={80} />
      <Hex size="80%" opacity={0.24} dur={60} reverse />
      <Hex size="60%" opacity={0.32} dur={45} />
      <Hex size="40%" opacity={0.4} dur={35} reverse />
      <Hex size="22%" opacity={0.55} dur={25} />
      {/* subtle center glow */}
      <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-current opacity-60 blur-[2px]" />
    </div>
  );
};

export default Hexagon;
