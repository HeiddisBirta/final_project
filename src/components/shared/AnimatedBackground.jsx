import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const blobStyle = (gradient) => ({
    width: "50vw",
    background: gradient,
    filter: "blur(80px)",
    position: "absolute",
    top: 0,
    left: 0,
  });

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
      }}
    >

      <motion.div
        style={blobStyle(
          "radial-gradient(circle at 30% 10%, rgba(0, 255, 90, 0.2), transparent 50%)"
        )}
        animate={{
          x: ["0%", "80%", "20%", "70%", "0%"],
          y: ["0%", "20%", "80%", "30%", "0%"],
          rotate: [0, 360],
        }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      />


      <motion.div
        style={blobStyle(
          "radial-gradient(circle at 70% 90%, rgba(0, 200, 50, 0.2), transparent 50%)"
        )}
        animate={{
          x: ["0%", "-70%", "-20%", "-80%", "0%"],
          y: ["0%", "-20%", "-80%", "-30%", "0%"],
          rotate: [360, 0],
        }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
      />


      <motion.div
        style={blobStyle(
          "radial-gradient(circle at 10% 50%, rgba(0, 255, 150, 0.15), transparent 60%)"
        )}
        animate={{
          x: ["0%", "60%", "80%", "50%", "0%"],
          y: ["0%", "80%", "60%", "70%", "0%"],
          rotate: [0, 360],
        }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

     
      <motion.div
        style={blobStyle(
          "radial-gradient(circle at 90% 50%, rgba(10, 100, 40, 0.15), transparent 60%)"
        )}
        animate={{
          x: ["0%", "-60%", "-80%", "-50%", "0%"],
          y: ["0%", "-80%", "-60%", "-70%", "0%"],
          rotate: [360, 0],
        }}
        transition={{ duration: 65, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
};

export default AnimatedBackground;
