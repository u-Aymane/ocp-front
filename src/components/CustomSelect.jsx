import { useState } from "react";
import { motion } from "framer-motion";

const options = [  { value: "1", label: "Emplacement 1" },  { value: "2", label: "Emplacement 2" },  { value: "3", label: "Emplacement 3" },];

const dropdownVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 10,
          backgroundColor: "#f1f1f1",
          cursor: "pointer",
        }}
        onClick={toggleOpen}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 15px",
          }}
        >
          <span style={{ fontSize: 16, color: "#555555" }}>
            {selectedOption.label}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="16"
            height="16"
            fill="#777"
          >
            <path d="M326.1 192H57.9c-21.4 0-32.2 25.9-17 41l134.1 134.1c9.4 9.4 24.6 9.4 33.9 0L343.1 233c15.2-15.2 4.4-41-17-27z" />
          </svg>
        </div>
        <motion.div
          variants={dropdownVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0 0 10px 10px",
            overflow: "hidden",
            display: isOpen ? "block" : "none",
            boxShadow: "0px 0px 8px rgba(123, 140, 255, 0.5)",
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                padding: "12px 15px",
                fontSize: 16,
                color: "#555555",
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomSelect;
