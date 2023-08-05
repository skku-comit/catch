//css
import classes from "./TypingText.module.css";
//imports
import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setDisplayText(displayText + text[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }, 100);
    if (currentIndex === text.length) {
      clearInterval(count);
    }
    return () => clearInterval(count);
  });

  return <div className={classes["text"]}>{displayText}</div>;
};

export default TypingText;

//
// const lines = text.split("\n");
// const [currentLineIndex, setCurrentLineIndex] = useState(0);
// const [currentCharIndex, setCurrentCharIndex] = useState(0);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     if (currentCharIndex < lines[currentLineIndex].length) {
//       setCurrentCharIndex(currentCharIndex + 1);
//     } else if (currentLineIndex < lines.length - 1) {
//       setCurrentLineIndex(currentLineIndex + 1);
//       setCurrentCharIndex(0);
//     }
//   }, 100); // 100ms마다 한 글자씩 출력

//   return () => clearTimeout(timer);
// }, [currentLineIndex, currentCharIndex]);

// const displayedText = lines
//   .slice(0, currentLineIndex + 1)
//   .map((line, index) => {
//     if (index < currentLineIndex) {
//       return line;
//     } else if (index === currentLineIndex) {
//       return line.substring(0, currentCharIndex);
//     }
//     return "";
//   })
//   .join("\n");

// return <div className={classes["text"]}>{displayedText}</div>;
