import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./boot.scss";
import bootSound from "./bootSound.mp3";
import BootCursor from "./BootCursor";

const letters = [
  { char: "M", x: -900, y: 0 },
  { char: "Y", x: 900, y: 0 },
  { char: "O", x: 0, y: -700 },
  { char: "S", x: 0, y: 700 },
];

const bootLogs = [
  "Initializing MYOS Kernel...",
  "Loading Modules...",
  "Starting Window Manager...",
  "Launching Desktop...",
];

export default function BootScreen({ onFinish }) {
  const [glow, setGlow] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [logIndex, setLogIndex] = useState(-1);

  useEffect(() => {
    const audio = new Audio(bootSound);
    audio.preload = "auto";
    audio.volume = 0.8;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    const playSound = async () => {
      try {
        if (audioContext.state === "suspended") {
          await audioContext.resume();
        }
        await audio.play();
      } catch (err) {
        console.log(err);
      }
    };

    const soundTimer = setTimeout(playSound, 200);

    const glowTimer = setTimeout(() => {
      setGlow(true);
    }, 2000);

    const greetingTimer = setTimeout(() => {
      setShowGreeting(true);
    }, 2100);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 850);

    const finishTimer = setTimeout(() => {
      clearInterval(logInterval);
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(soundTimer);
      clearTimeout(glowTimer);
      clearTimeout(greetingTimer);
      clearTimeout(finishTimer);
      clearInterval(logInterval);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6, duration: 0.8 }}
    >
      <BootCursor />
      <div className="brightness-layer" />

      <div className="boot-center">
        <div className={`logo ${glow ? "glow" : ""}`}>
          {letters.map((l, i) => (
            <motion.span
              key={i}
              initial={{
                x: l.x,
                y: l.y,
                opacity: 0,
                scale: 0.5,
                filter: "blur(30px)",
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                mass: 0.9,
                delay: i * 0.25,
              }}
            >
              {l.char}
            </motion.span>
          ))}
        </div>

        {showGreeting && (
          <motion.p
            className="boot-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to My Portfolio
          </motion.p>
        )}
      </div>

      <div className="boot-logs">
        {bootLogs.slice(0, logIndex + 1).map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {log}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
