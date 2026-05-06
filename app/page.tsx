import AppLayout from "./components/AppLayout";
import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import Alert from "./components/Alert";

export default function Home() {
  return (
    <AppLayout>
      <div>
        <Navigation />
        <Title />
        <Card bgColor="#4a90e2" title="Blue Card" />
        <Card bgColor="#ee0e2a" title="Pink Card" />
        <Card bgColor="#2ecc71" title="Green Card" />

        <p className={styles.text}>This is Home Page</p>
        <Button />
        <Alert />

        <div>
          <Link href="/about" className={styles.link}>
            Go to About Page
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
