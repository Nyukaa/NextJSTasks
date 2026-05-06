import AppLayout from "./components/AppLayout";
import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import Alert from "./components/Alert";
import ProfileCard from "./components/ProfileCard";
export default function Home() {
  return (
    <AppLayout>
      <div>
        <Navigation />
        <Title />

        <ProfileCard name="Anna" role="Frontend Developer" color="#ddd123" />
        <ProfileCard name="Alex" role="Backend Developer" color="#4a90e2" />

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Card bgColor="#4a90e2" title="Blue Card" />
          <Card bgColor="#ee0e2a" title="Pink Card" />
          <Card bgColor="#2ecc71" title="Green Card" />
        </div>
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
