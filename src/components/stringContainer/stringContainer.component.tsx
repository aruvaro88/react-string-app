import styles from "./stringContainer.module.css"

interface StringContainerProps {
  children: React.ReactNode
}

export const StringContainer: React.FC<StringContainerProps> = ({ children }) => {
  return (
    <div className={styles.stringContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.header}>This is a technical proof</h1>
        <p className={styles.subHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla at mauris ac maximus. Nunc id auctor ligula. Sed vel neque sit
          amet lacus porttitor dapibus vehicula vitae ligula.
        </p>
      </div>

      {children}
    </div>
  )
}
