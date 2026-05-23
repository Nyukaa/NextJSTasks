import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={`${styles.container} flex items-center gap-4`}>
      <h1 className={styles.title}>Welcome!</h1>
    </div>
  );
}
