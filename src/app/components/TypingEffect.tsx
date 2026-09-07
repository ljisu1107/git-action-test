"use client";

import { motion } from "motion/react";
import {useEffect, useState} from "react";

export const TypingEffect = ({text, typingSpeed = 150,}: {
  text: string;
  typingSpeed?: number;
}) => {
  // 현재 입력된 텍스트
  const [displayText, setDisplayText] = useState("");
  // 현재 입력된 텍스트의 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if(!!text){
      if(text.length > currentIndex){

       timer =  setTimeout(()=>{
          setCurrentIndex((prev)=> prev + 1);
          setDisplayText((prev)=> {
            return prev + text[currentIndex];
          });
        },typingSpeed);
      }

      return () => clearTimeout(timer)
    }
  },[text, currentIndex]);

  return (
    <div className="font-mono text-2xl">
      {/* 현재 입력된 텍스트 */}
      {displayText}
      {/* 깜빡거리는 타이핑 커서 */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block h-5 w-2 bg-black"
      />
    </div>
  );
};