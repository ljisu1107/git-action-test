"use client";

import * as motion from "motion/react-m";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <motion.div
      className="text-center"
      initial={{
        opacity: 0,
        y:60
      }}
      animate={{
        opacity: 1,
        y:0
      }}

    >
      <motion.h2 className="mb-6 text-3xl font-bold">테스트 결과</motion.h2>
      <motion.div className="rounded-lg bg-white p-6 shadow-lg">
        {answers.map((answer, index) => (
          <motion.p
            key={index}
            className="mb-2"
            initial={{
              opacity:0,
              x:60
            }}
            animate={{
              opacity:1,
              x:0
            }}
            transition={{
              delay: 0.3 * index
            }}
          >
            질문 {index + 1}: {answer}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
