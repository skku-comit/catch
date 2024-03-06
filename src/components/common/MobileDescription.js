import React from "react";
// css
import classes from "./MobileDescription.module.css";
// react-router
import { Link } from "react-router-dom";
// framer-motion
import { motion } from "framer-motion";
const MobileDescription = () => {
  return (
    <motion.div
      className={classes["text"]}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="./q1" className={classes["start-link"]} />
    </motion.div>
  );
};

export default MobileDescription;
