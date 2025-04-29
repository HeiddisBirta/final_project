import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const backgroundColor = isDarkMode ? "#00025a" : "#ffee00";

  const blobColor = isDarkMode
    ? "radial-gradient(circle, rgba(255, 89, 0, 0.85), transparent 40%)"
    : "radial-gradient(circle, rgba(0, 255, 247, 0.85), transparent 40%)";

  const baseBlobStyle = {
    width: "60vw",
    height: "60vh",
    background: blobColor,
    filter: "blur(50px)",
    position: "absolute",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -50,
        pointerEvents: "none",
        backgroundColor,
      }}
    >
      {/* Blob 1 */}
      <motion.div
        style={{ ...baseBlobStyle, top: "5%", left: "10%" }}
        animate={{
          x: ["0vw", "20vw", "0vw", "-20vw", "0vw"],
          y: ["0vh", "20vh", "40vh", "20vh", "0vh"],
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

      {/* Blob 2 */}
      <motion.div
        style={{ ...baseBlobStyle, top: "60%", left: "10%" }}
        animate={{
          x: ["0vw", "-25vw", "0vw", "25vw", "0vw"],
          y: ["0vh", "-30vh", "-60vh", "-30vh", "0vh"],
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
      />

      {/* Blob 3 */}
      <motion.div
        style={{ ...baseBlobStyle, bottom: "5%", right: "5%" }}
        animate={{
          x: ["0vw", "-30vw", "0vw", "30vw", "0vw"],
          y: ["0vh", "30vh", "60vh", "30vh", "0vh"],
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 58, ease: "linear", repeat: Infinity }}
      />

      {/* Blob 4 */}
      <motion.div
        style={{ ...baseBlobStyle, top: "20%", right: "5%" }}
        animate={{
          x: ["0vw", "30vw", "0vw", "-30vw", "0vw"],
          y: ["0vh", "-20vh", "-40vh", "-20vh", "0vh"],
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 62, ease: "linear", repeat: Infinity }}
      />

      {/* Blob 5 */}
      <motion.div
        style={{ ...baseBlobStyle, top: "30%", left: "50%" }}
        animate={{
          x: ["0vw", "-20vw", "20vw", "-20vw", "0vw"],
          y: ["0vh", "20vh", "-20vh", "20vh", "0vh"],
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 54, ease: "linear", repeat: Infinity }}
      />

      {/* Blob 6 */}
      <motion.div
        style={{ ...baseBlobStyle, top: "50%", right: "50%" }}
        animate={{
          x: ["0vw", "25vw", "-25vw", "25vw", "0vw"],
          y: ["0vh", "-25vh", "25vh", "-25vh", "0vh"],
          rotate: [0, -360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 57, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
};

export default AnimatedBackground;

