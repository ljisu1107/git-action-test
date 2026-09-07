"use client";
import * as motion from "motion/react-m";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{
        y:'20px',
        opacity:0,
      }}
      animate={{
        opacity:1,
        y:0
      }}
      className="text-center">
      <motion.h1
        className="mb-8 text-4xl font-bold"
        initial={{
          fontSize:'36px'
        }}
        animate={{
          fontSize:'42px',
        }}
      >
        MBTI 테스트
      </motion.h1>
      <motion.button
        onClick={onStart}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
        whileHover={{
          scale:1.1
        }}
        whileTap={{
          scale:0.95
        }}
      >
        시작하기
      </motion.button>
    </motion.div>
  );
}
