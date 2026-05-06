import Link from "next/link";

import styles from "../home/home.module.css";
export default function About() {
  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        Hi, I am Anna — a full-stack developer with a curious mind
      </h1>

      <p className={styles.text}>
        Ever since Iwas a child, I dreamed of becoming a programmer. That dream
        shaped my education: I studied mathematics and computer science,
        building a solid foundation in logic and problem-solving. When I am not
        coding, Iam probably playing piano, skiing through snowy trails, diving
        into photography, or sipping a warm drink while sketching new ideas. I
        believe in lifelong learning and enjoy working with people who value
        clarity, creativity, and collaboration.
      </p>

      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
}
