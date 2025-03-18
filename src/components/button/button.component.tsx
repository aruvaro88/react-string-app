import React from "react"
import styles from "./button.module.css"

interface ButtonProps {
  variant?: "primary" | "secondary"
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({ variant = "primary", onClick, children, disabled }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
