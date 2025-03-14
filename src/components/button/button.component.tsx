import React from "react";
import styles from "./button.module.css"; // Importamos los estilos

interface ButtonProps {
  variant?: "primary" | "secondary"; // Tipos de botón
  onClick: () => void; // Función al hacer clic
  children: React.ReactNode; // Contenido del botón
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children }) => {
  return (
    <div className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
