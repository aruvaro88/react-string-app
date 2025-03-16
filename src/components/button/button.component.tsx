import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary"; 
  onClick: () => void; 
  children: React.ReactNode; 
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children, disabled }) => {
  return (
    <div className={`${styles.button} ${styles[variant]} ${disabled && styles.disabled}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
