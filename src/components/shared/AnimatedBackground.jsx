import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const AnimatedBackground = () => {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  // Check if dark mode is active by looking at the HTML class
  useEffect(() => {
    const checkIfDark = () => {
      setDarkModeIsOn(document.documentElement.classList.contains("dark"));
    };

    checkIfDark();

    // OBSERVE to see if anything changed in the HTML -> did someone press the light/dark mode button 
    const watchMode = new MutationObserver(checkIfDark);
    watchMode.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => watchMode.disconnect();
  }, []);

  // Set background color depending on light or dark mode
  const backgroundColor = darkModeIsOn ? "#00025a" : "#f47aff";

  // Set blob color depending on light and dark mode
  const blobColor = darkModeIsOn
    ? "radial-gradient(circle, rgba(255, 89, 0, 0.85), transparent 40%)"
    : "radial-gradient(circle, rgba(0, 255, 247, 0.85), transparent 40%)";


  const blobStyle = {
    width: "60vw",
    height: "60vh",
    background: blobColor,
    filter: "blur(50px)",
    position: "absolute",
  };


  const blobConfigs = useMemo(() => {

    // Function to create an array of random positions (for x or y)
    const getRandomMovementSteps = (unit = "vw", max = 40) =>
      Array.from({ length: 6 }, () =>
        `${Math.floor(Math.random() * max * 2 - max)}${unit}`
      );

    return Array.from({ length: 6 }).map(() => ({
      startingTop: `${Math.floor(Math.random() * 50)}%`,
      startingLeft: `${Math.floor(Math.random() * 50)}%`,
      pathX: getRandomMovementSteps("vw", 40),
      pathY: getRandomMovementSteps("vh", 40),
      spin: [0, Math.random() > 0.5 ? 360 : -360],
      floatSpeed: Math.floor(Math.random() * 20) + 60,
    }));
  }, []);

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
      {/*loop through the blobs*/}
      {blobConfigs.map((blob, index) => (
        <motion.div
          key={index}
          style={{ ...blobStyle, top: blob.startingTop, left: blob.startingLeft }}
          animate={{
            x: blob.pathX,
            y: blob.pathY,
            rotate: blob.spin,
            scale: [1, 1.05, 1], // means that they are pulsing a little
          }}
          transition={{
            duration: blob.floatSpeed,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
