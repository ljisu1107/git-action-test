"use client";

import * as motion from "motion/react-m";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
                                       question,
                                       onAnswer,
                                     }: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <motion.h2
        className="mb-8 text-center text-2xl font-bold"
        initial={{
          opacity: 0,
          x:60
        }}
        animate={{
          opacity: 1,
          x:0
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {question.question}
      </motion.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow hover:shadow-2xl hover:scale-110 transition-all"
            initial={{
              opacity: 0,
              y:60
            }}
            animate={{
              opacity: 1,
              y:0
            }}
            transition={{
              delay: 0.2 * index,
            }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}