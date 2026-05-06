import Link from "next/link";
import styles from "./home/home.module.css";
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>

      <Link href="/about" className={styles.link}>
        Go to About Page
      </Link>
    </div>
  );
}
