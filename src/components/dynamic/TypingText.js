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
    }, 30);
    if (currentIndex === text.length) {
      clearInterval(count);
    }
    return () => clearInterval(count);
  }, [displayText]);

  return (
    <div className={`${classes["text"]} ${classes["question"]}`}>
      {displayText}
    </div>
  );
};

export default TypingText;
