import Link from "next/link";
import styles from "../../home/home.module.css";

export default function Post() {
  return (
    <div>
      <h1 className={styles.title}> My First Blog Post</h1>

      <p className={styles.text}>This is a nested page.</p>
      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}
