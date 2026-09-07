import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface inputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  className?: string;
}

// 1.clsx
//  - falsy 값 자동 제거
//  - 조건부로 묶기
//  - 문자열 병합

// 2.twMerge
//  - 스타일 오버라이딩
export default function Input({className, type = "text", ...props}:inputProps) {
  return (
    <input type={type} className={twMerge(
      clsx(
        "border border-gray-300 rounded-md px-3 py-1 shadow-xs w-full",
        className,
      )
    )} {...props} />
  );
}

