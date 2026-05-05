import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About this course</h1>

      <p>
        This course introduces Next.js basics like routing, pages, and
        components.
      </p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
