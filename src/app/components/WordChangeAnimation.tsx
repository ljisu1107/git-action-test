"use client";

import { AnimatePresence , motion} from "motion/react";
import { useState, useEffect } from "react";

export const WordChangeAnimation = ({
                                      prefix,
                                      suffix,
                                      words,
                                      interval = 2000,
                                    }: {
  prefix: string;
  suffix: string;
  words: string[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // currentIndex를 현재 단어 개수로 나눈 나머지를 구함
      // 단어가 4개라면 0, 1, 2, 3, 0, 1, 2, 3, ...
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className="flex h-12 items-center overflow-hidden text-2xl">
      <span>{prefix}</span>
      <div className="relative mx-2 inline-block w-12 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -50 }}
            className="inline-block font-bold text-blue-600"
          >
            {`${words[currentIndex]}`}
          </motion.span>
        </AnimatePresence>
      </div>
      <span>{suffix}</span>
    </div>
  );
};
