import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Title />

      <p className={styles.text}>This is Home Page</p>
      <Button />
      <div>
        <Link href="/about" className={styles.link}>
          Go to About Page
        </Link>
      </div>
    </div>
  );
}
