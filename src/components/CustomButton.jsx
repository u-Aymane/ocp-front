import React from "react";
import { motion } from "framer-motion";
const Button = (props) => {
  const { children, onClick, className } = props;
  return (
    <motion.button
      onClick={onClick}
      className={`bg-[#000] text-white  text-[18px] font-normal border-[2px] px-[3.4rem] py-[1.4rem] rounded-[25px] ${className} border-black hover:border-[2px] hover:bg-white hover:text-black transition-all duration-300 ease-in-out`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
